import React from "react";
export interface LogoProps {
  place: string;
}
// style={{fill: props.place === 'footer'? "hsl(var(--background))" : "hsl(var(--foreground))"}}
function Logo(props: LogoProps) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="50"
    fill="none"
    viewBox="0 0 129 33"
  >
    <path
      style={{fill: props.place === 'footer'? "#ffffff" : "#000000"}}
      d="M38.248 21.408h.192a10.27 10.27 0 001.944.624c.736.16 1.464.24 2.184.24.224 0 .52-.008.888-.024a5.838 5.838 0 001.152-.216c.4-.112.736-.304 1.008-.576.272-.288.408-.688.408-1.2 0-.576-.232-.984-.696-1.224-.464-.24-1.104-.424-1.92-.552l-1.152-.192c-1.36-.224-2.368-.608-3.024-1.152-.656-.56-.984-1.344-.984-2.352 0-.704.184-1.36.552-1.968.384-.624.992-1.12 1.824-1.488.848-.384 1.976-.576 3.384-.576.624 0 1.224.056 1.8.168.592.096 1.08.216 1.464.36v1.968h-.192a10.42 10.42 0 00-1.512-.432 8.508 8.508 0 00-1.656-.144c-1.104 0-1.976.16-2.616.48-.624.304-.936.824-.936 1.56 0 .56.224.96.672 1.2.464.24 1.104.424 1.92.552l1.152.192a7.22 7.22 0 012.016.6c.608.288 1.096.68 1.464 1.176.368.48.552 1.088.552 1.824 0 1.296-.464 2.28-1.392 2.952-.928.656-2.352.984-4.272.984-.816 0-1.584-.064-2.304-.192a14.012 14.012 0 01-1.92-.48v-2.112zM51.304 24V9.888c0-.32-.008-.736-.024-1.248 0-.512-.016-1.016-.048-1.512-.016-.496-.056-.888-.12-1.176l.048-.192h2.352v6.504l-.456-.696c.512-.24 1.072-.448 1.68-.624.624-.192 1.336-.288 2.136-.288.672 0 1.32.088 1.944.264.64.16 1.208.456 1.704.888.496.416.888.992 1.176 1.728.304.72.456 1.648.456 2.784V24h-2.208v-7.392c0-1.056-.152-1.864-.456-2.424-.288-.576-.704-.968-1.248-1.176-.528-.224-1.144-.336-1.848-.336-.416 0-.832.04-1.248.12-.4.08-.784.184-1.152.312a9.348 9.348 0 00-.96.36l.48-1.104V24h-2.208zM65.6 17.424c0-1.424.248-2.64.744-3.648.512-1.008 1.216-1.776 2.112-2.304.912-.544 1.96-.816 3.144-.816 1.184 0 2.224.272 3.12.816.912.528 1.616 1.296 2.112 2.304.512 1.008.768 2.224.768 3.648s-.256 2.64-.768 3.648c-.496 1.008-1.2 1.784-2.112 2.328-.896.528-1.936.792-3.12.792-1.216 0-2.272-.264-3.168-.792-.896-.544-1.592-1.32-2.088-2.328-.496-1.008-.744-2.224-.744-3.648zm2.256 0c0 1.6.32 2.808.96 3.624.656.816 1.584 1.224 2.784 1.224 1.2 0 2.12-.408 2.76-1.224.656-.816.984-2.024.984-3.624 0-1.616-.328-2.824-.984-3.624-.64-.816-1.56-1.224-2.76-1.224-1.2 0-2.128.408-2.784 1.224-.64.8-.96 2.008-.96 3.624zM81.14 24v-8.256c0-.32-.008-.736-.024-1.248 0-.512-.016-1.016-.048-1.512-.016-.496-.056-.888-.12-1.176l.048-.192c.416-.16.928-.296 1.536-.408.624-.112 1.24-.2 1.848-.264a15.78 15.78 0 011.56-.096c.384 0 .696.008.936.024.24.016.44.04.6.072v1.92h-.192a7.837 7.837 0 00-.744-.072 10.732 10.732 0 00-2.352.096c-.544.08-1.016.16-1.416.24l.432-.6c.096.528.144 1.184.144 1.968V24H81.14zm14.597.192c-1.12 0-2.016-.176-2.688-.528-.672-.368-1.16-.872-1.464-1.512-.304-.656-.456-1.416-.456-2.28V7.392h2.208V19.68c0 .912.2 1.576.6 1.992.4.4 1.032.6 1.896.6.336 0 .664-.032.984-.096.32-.08.6-.176.84-.288h.192v1.872c-.24.112-.544.208-.912.288a4.744 4.744 0 01-1.2.144zm-6.624-11.328v-1.92h7.968v1.92h-7.968zm17.671 11.328c-1.216 0-2.28-.144-3.192-.432-.896-.304-1.648-.744-2.256-1.32a5.327 5.327 0 01-1.32-2.112c-.288-.848-.432-1.816-.432-2.904 0-1.36.248-2.544.744-3.552.512-1.024 1.216-1.816 2.112-2.376.912-.56 1.976-.84 3.192-.84 1.408 0 2.544.288 3.408.864.864.576 1.48 1.384 1.848 2.424.384 1.04.552 2.248.504 3.624l-.024.672H101.12v-1.824h7.968v-.192c0-1.2-.288-2.104-.864-2.712-.576-.624-1.44-.936-2.592-.936-.672 0-1.296.144-1.872.432-.576.288-1.04.776-1.392 1.464-.352.688-.528 1.624-.528 2.808v.144c0 1.232.216 2.2.648 2.904a3.638 3.638 0 001.776 1.512c.768.288 1.64.432 2.616.432.816 0 1.512-.08 2.088-.24.576-.16 1.032-.336 1.368-.528h.192v1.968c-.384.192-.888.36-1.512.504-.624.144-1.368.216-2.232.216zM114.96 24v-8.256c0-.32-.008-.736-.024-1.248 0-.512-.016-1.016-.048-1.512-.016-.496-.056-.888-.12-1.176l.048-.192c.416-.16.944-.312 1.584-.456a26.01 26.01 0 011.944-.36 11.996 11.996 0 011.704-.144c.8 0 1.544.088 2.232.264a4.42 4.42 0 011.824.888c.544.416.96.992 1.248 1.728.304.72.456 1.648.456 2.784V24H123.6v-7.488c0-1.056-.152-1.864-.456-2.424-.304-.576-.744-.968-1.32-1.176-.576-.224-1.264-.336-2.064-.336a8.94 8.94 0 00-1.656.168 9.73 9.73 0 00-1.512.408l.384-.672c.064.24.112.544.144.912.032.352.048.72.048 1.104V24h-2.208z"
    ></path>
    <path
      fill="#1662EE"
      d="M10.894 10H8l.362 14.106h2.532V10zM13.425 30.255h2.532V15.787l8.32 8.681H25V12.894L22.106 10v7.957L14.15 10h-1.085l.361 20.255z"
    ></path>
    <circle cx="16" cy="16" r="15" stroke="#1662EE" strokeWidth="2"></circle>
  </svg>
  );
}

export default Logo;
