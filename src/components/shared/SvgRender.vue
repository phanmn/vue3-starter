<template lang="pug">
svg(ref='svg' v-bind='svgAttriutes')
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { memoize } from '/@/services/lodash';

const SvgRender = defineComponent({
  props: {
    src: {
      type: String,
    },
  },
  data() {
    let svgAttriutes: any = {
      width: 0,
      height: 0,
    };
    return {
      svg: '',
      svgAttriutes,
    };
  },
  mounted() {
    this.createSvgElement();
  },
  methods: {
    createSvgElement() {
      memoizedGetSvgFile(this.src)
        .then(async responseText => {
          const domParser = new DOMParser();
          let elementSvg = domParser.parseFromString(responseText, 'text/xml');

          let attributes = {};
          let el = elementSvg.documentElement;
          for (
            let i = 0;
            i < elementSvg.documentElement.attributes.length;
            i++
          ) {
            let attrib = el.attributes[i];
            attributes[attrib.name] = attrib.value;
          }

          this.svgAttriutes = attributes;
          await this.$nextTick();
          (this.$refs.svg as SVGElement).innerHTML =
            elementSvg.documentElement.innerHTML;
          elementSvg = null;
          // this.svg = elementSvg.documentElement.innerHTML;
        })
        .catch((e: Error) => {
          this._errorLog(e.message);
        });
    },
    _errorLog(log) {
      console.error(`[ERROR] : SvgRender, ${log}`);
    },
  },
});

let memoizedGetSvgFile = memoize(getSvgFile);
function getSvgFile(path) {
  const dir = window.location.origin;
  let source = path.match(/^http(s?):\/\//)
    ? path
    : path.substring(0, 1) === '/'
    ? `${dir}${path}`
    : `${dir}/${path}`;

  source = source.replace('quickom://./quickom://./', 'quickom://./');
  /*
  return fetch(source)
    .then((response) => {
      return response.text();
    });
  */

  let p = new Promise<string>((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', source, true);
    request.onload = async () => {
      if (request.status >= 200 && request.status < 400) {
        resolve(request.responseText);
      } else {
        reject(
          new Error(`Can't load element from this path.\nPath : ${source}`),
        );
      }
    };

    request.onerror = () => {
      reject(new Error(`Can't load element from this path.\nPath : ${source}`));
    };

    request.send();
  });

  return p;
}

export default SvgRender;
</script>