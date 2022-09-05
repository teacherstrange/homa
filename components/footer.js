import FancyLink from "@/components/fancyLink";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-[0] px-6 xl:px-10 pt-6 md:pt-[20vw] pb-10 md:pb-10">
      <div className="grid grid-cols-5 md:grid-cols-12">
        <div className="col-span-5 md:col-span-4 2xl:col-span-5 block md:flex md:flex-wrap mb-12 md:mb-0">
          <div className="w-full hidden md:block">
            <svg className="w-full mb-8" viewBox="0 0 560 208" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M381.51 130.803h35.426V0H286.133v130.803h35.426V35.426h12.262v95.377h35.426V35.426h12.263v95.377ZM273.867 0H143.064v130.803h130.803V0Zm-35.426 95.377H178.49V35.426h59.951v59.951ZM429.197 0v130.803h35.426v-29.976h59.951v29.976H560V0H429.197Zm95.377 65.401h-59.951V35.426h59.951V65.4ZM95.377 130.803h35.426V0H95.377v47.688H35.426V0H0v130.803h35.426V83.114h59.951v47.689ZM5.028 173.979H0v28.109h5.028v-28.109ZM30.14 188.08H15.07v5.028h10.042v8.965h5.028V188.08Z" fill="#fff"/><path d="M25.111 202.079H5.027v5.028h20.084v-5.028ZM25.111 168.951H5.027v5.028h20.084v-5.028ZM30.141 173.979h-5.028v6.473h5.028v-6.473ZM61.657 168.951H51.615v5.028h10.042v-5.028ZM66.682 190.588H46.598v-11.595H41.57v28.109h5.028v-11.486h20.084v11.486h5.027v-28.109h-5.027v11.595Z" fill="#fff"/><path d="M51.625 173.979h-5.027v5.028h5.027v-5.028ZM66.68 173.979h-5.028v5.028h5.028v-5.028ZM113.389 178.789h-5.082v5.014h5.082v23.299h5.014v-38.151h-5.014v9.838Z" fill="#fff"/><path d="M108.309 183.809h-5.028v13.257h5.028v-13.257Z" fill="#fff"/><path d="M103.293 197.065h-5.027v5.028h5.027v-5.028ZM88.155 178.789v-9.838H83.14v38.151h5.014v-23.299h5.082v-5.014h-5.082ZM98.264 183.809h-5.028v13.257h5.028v-13.257ZM155.056 168.951h-20.138v5.028h20.138v-5.028ZM155.056 202.079h-20.138v5.028h20.138v-5.028ZM129.832 202.075h5.082v-11.65h15.124v-5.014h-15.124v-11.432h-5.082v28.096ZM190.156 173.979h12.713v33.123h5.082v-33.123h12.767v-5.028h-30.562v5.028ZM255.91 185.302h-20.084v-16.351h-5.082v38.151h5.082v-16.773h20.084v16.773h5.082v-38.151h-5.082v16.351ZM272.137 202.075h5.082v-11.65h15.11v-5.014h-15.11v-11.432h-5.082v28.096ZM297.359 168.951h-20.138v5.028h20.138v-5.028ZM297.359 202.079h-20.138v5.028h20.138v-5.028ZM337.473 173.979h-5.028v11.323h5.028v-11.323ZM357.607 168.951h-20.138v5.028h20.138v-5.028ZM357.607 185.306h-20.138v5.027h20.138v-5.027ZM357.607 202.079h-20.138v5.028h20.138v-5.028Z" fill="#fff"/><path d="M337.473 197.065h-5.028v5.028h5.028v-5.028ZM362.694 190.334h-5.083v11.759h5.083v-11.759ZM362.694 173.979h-5.083v5.028h5.083v-5.028ZM392.842 185.574h-4.973v5.014h5.028v-5.014h4.959v-16.623h-5.014v16.623ZM382.801 185.577h-5.028v5.028h5.028v-5.028ZM377.776 168.951h-5.028v16.623h5.028v-16.623ZM387.869 190.592h-5.068v16.514h5.068v-16.514ZM413.582 173.979h-5.027v11.323h5.027v-11.323ZM433.707 168.951h-20.139v5.028h20.139v-5.028ZM433.707 185.306h-20.139v5.027h20.139v-5.027ZM438.801 173.979h-5.082v5.028h5.082v-5.028ZM438.801 190.334h-5.082v11.759h5.082v-11.759ZM413.584 197.065h-5.027v5.028h5.027v-5.028Z" fill="#fff"/><path d="M433.707 202.079h-20.139v5.028h20.139v-5.028ZM448.859 173.979h12.713v33.123h5.082v-33.123h12.767v-5.028h-30.562v5.028ZM514.666 168.951h-20.139v5.028h20.139v-5.028ZM514.666 202.079h-20.139v5.028h20.139v-5.028ZM489.449 202.075h5.082v-11.65h15.125v-5.014h-15.125v-11.432h-5.082v28.096ZM549.903 183.809h-5.028v13.257h5.028v-13.257ZM539.86 183.809h-5.028v13.257h5.028v-13.257ZM554.971 178.789h-5.069v5.014h5.069v23.299h5.028v-38.151h-5.028v9.838ZM529.748 178.789v-9.838h-5.014v38.151h5.014v-23.299h5.083v-5.014h-5.083Z" fill="#fff"/><path d="M544.889 197.065h-5.028v5.028h5.028v-5.028Z" fill="#fff"/></svg>
          </div>

          <div className="w-full mt-auto">
            <div className="w-[165px] mb-6">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block w-full hover:opacity-75 focus:opacity-75">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.664 40"><path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18A6.258 6.258 0 0 0 .82 3.617a6.601 6.601 0 0 0-.625 1.903 12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 0 0 .18 2.002 6.588 6.588 0 0 0 .624 1.905A6.208 6.208 0 0 0 1.998 38a6.274 6.274 0 0 0 1.618 1.179 6.7 6.7 0 0 0 1.901.63 13.455 13.455 0 0 0 2.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 0 0 2-.178 6.804 6.804 0 0 0 1.908-.63A6.277 6.277 0 0 0 117.666 38a6.395 6.395 0 0 0 1.182-1.614 6.604 6.604 0 0 0 .619-1.905 13.506 13.506 0 0 0 .185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 0 0-.185-2.003 6.618 6.618 0 0 0-.62-1.903 6.466 6.466 0 0 0-2.798-2.8 6.768 6.768 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002Z" fill="#a6a6a6" /><path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.586 12.586 0 0 1 7.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 0 1 1.858.162 5.938 5.938 0 0 1 1.671.548 5.594 5.594 0 0 1 2.415 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 0 1-.17 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.668.55 12.542 12.542 0 0 1-1.869.163c-.293.007-.6.011-.897.011l-1.084.002Z"/><g data-name="&lt;Group&gt;"><g data-name="&lt;Group&gt;"><path data-name="&lt;Path&gt;" d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66A4.636 4.636 0 0 0 18.8 13.74a4.1 4.1 0 0 0 3.237-1.53Z" fill="#fff" /></g><path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039Zm-4.243-1.55h3.752l-1.85-5.446h-.051ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046ZM65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046ZM71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 0 0 .611-.043v1.463a5.104 5.104 0 0 1-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106ZM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 0 1 2.177-1.635 2.866 2.866 0 0 1 .637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.858ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273Zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298Z" fill="#fff" /></g><g data-name="&lt;Group&gt;"><path d="M37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73Zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.134h-1.125ZM41.68 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889ZM53.854 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.888ZM59.094 8.437h.888v6.26h-.888ZM61.218 12.444a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.424c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348Zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.983ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526ZM79.23 12.444a2.133 2.133 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0Zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 0 0-1.075 1.141v2.635h-.889ZM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.194.679.637.679a2.967 2.967 0 0 0 .339-.021v.74a2.916 2.916 0 0 1-.484.046c-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074ZM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.806 1.483 1.483 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 0 0-1.134 1.142v2.63h-.888ZM104.761 13.482a1.828 1.828 0 0 1-1.95 1.303 2.045 2.045 0 0 1-2.081-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546Zm-3.126-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167Z" fill="#fff"/></g></svg>
              </a>
            </div>

            <div className="w-[165px] mb-6">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block w-full hover:opacity-75 focus:opacity-75">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5435.8 1604"><path d="M5234.4 1604h-5033C90.4 1604 0 1513.6 0 1403.5v-1203C0 90 90.4 0 201.4 0h5033c110.9 0 201.4 90 201.4 200.5v1203c0 110.1-90.5 200.5-201.4 200.5z" fillRule="evenodd" clipRule="evenodd"/><path d="M5234.4 32.1c93.1 0 169.3 75.7 169.3 168.4v1203c0 92.7-75.7 168.4-169.3 168.4h-5033c-93.1 0-169.3-75.7-169.3-168.4v-1203c0-92.7 75.7-168.4 169.3-168.4h5033zm0-32.1h-5033C90.4 0 0 90.4 0 200.5v1203C0 1514 90.4 1604 201.4 1604h5033c110.9 0 201.4-90 201.4-200.5v-1203C5435.8 90.4 5345.3 0 5234.4 0z" fillRule="evenodd" clipRule="evenodd" fill="#a6a6a6"/><path d="M2863.6 530.6c-36.3 0-66.9-12.7-91.1-37.7-24-24.3-37.4-57.8-36.8-92 0-36.5 12.4-67.4 36.8-91.9 24.1-25 54.7-37.7 91-37.7 35.9 0 66.5 12.7 91.1 37.7 24.4 25.3 36.8 56.2 36.8 91.9-.4 36.6-12.8 67.5-36.8 91.9-24.1 25.2-54.7 37.8-91 37.8zm-1080.1 0c-35.5 0-66.3-12.5-91.5-37.2-25-24.6-37.7-55.7-37.7-92.4s12.7-67.8 37.7-92.4c24.7-24.7 55.5-37.2 91.5-37.2 17.6 0 34.7 3.5 51.1 10.6 16.1 6.9 29.2 16.3 38.9 27.8l2.4 2.9-27.1 26.6-2.8-3.3c-15.3-18.2-35.8-27.1-62.9-27.1-24.2 0-45.3 8.6-62.7 25.6-17.5 17.1-26.4 39.5-26.4 66.6s8.9 49.5 26.4 66.6c17.4 17 38.5 25.6 62.7 25.6 25.8 0 47.5-8.6 64.4-25.6 10-10 16.2-24 18.4-41.7H1779v-37.4h124.2l.5 3.4c.9 6.3 1.8 12.8 1.8 18.8 0 34.5-10.4 62.4-31 83-23.4 24.4-54 36.8-91 36.8zm1436.1-5.3h-38.3L3064 337.6l1 33.8v153.8h-38.3V276.7h43.7l1.2 1.9 110.3 176.8-1-33.7v-145h38.7v248.6zm-643.8 0H2537V314.1h-67.3v-37.4H2643v37.4h-67.3v211.2zm-137.7 0h-38.7V276.7h38.7v248.6zm-217.5 0h-38.7V314.1h-67.3v-37.4h173.3v37.4h-67.3v211.2zm-130.5-.4h-148.4V276.7h148.4v37.4h-109.6v68.2h98.9v37h-98.9v68.2h109.6v37.4zm710.8-57.7c17.3 17.3 38.3 26 62.7 26 25.1 0 45.6-8.5 62.7-26 17-17 25.6-39.3 25.6-66.2s-8.6-49.3-25.5-66.2c-17.3-17.3-38.4-26-62.7-26-25.1 0-45.6 8.5-62.6 26-17 17-25.6 39.3-25.6 66.2s8.5 49.3 25.4 66.2z" fill="#fff"/><path d="M2732.1 872.4c-94.5 0-171.1 71.7-171.1 170.6 0 98 77.1 170.6 171.1 170.6 94.5 0 171.1-72.2 171.1-170.6 0-98.9-76.6-170.6-171.1-170.6zm0 273.6c-51.7 0-96.2-42.8-96.2-103.4 0-61.5 44.6-103.4 96.2-103.4 51.7 0 96.2 41.9 96.2 103.4.1 61-44.5 103.4-96.2 103.4zm-373.3-273.6c-94.5 0-171.1 71.7-171.1 170.6 0 98 77.1 170.6 171.1 170.6 94.5 0 171.1-72.2 171.1-170.6 0-98.9-76.7-170.6-171.1-170.6zm0 273.6c-51.7 0-96.2-42.8-96.2-103.4 0-61.5 44.6-103.4 96.2-103.4 51.7 0 96.2 41.9 96.2 103.4 0 61-44.5 103.4-96.2 103.4zm-444.2-221.5v72.2h173.3c-5.3 40.5-18.7 70.4-39.2 90.9-25.4 25.4-64.6 53-133.7 53-106.5 0-189.8-86-189.8-192.5s83.3-192.5 189.8-192.5c57.5 0 99.4 22.7 130.5 51.7l51.2-51.2c-43.2-41.4-100.7-73.1-181.3-73.1-146.1 0-268.7 119-268.7 264.7 0 146.1 122.5 264.7 268.7 264.7 78.9 0 138.1-25.8 184.9-74.4 47.7-47.7 62.8-115 62.8-169.3 0-16.9-1.3-32.1-4-45h-244.6c.1-.1.1.8.1.8zm1816.9 56.2C3717.2 942.4 3674 872 3585.4 872c-87.8 0-160.8 69.1-160.8 170.6 0 95.8 72.2 170.6 169.3 170.6 78 0 123.4-47.7 142.1-75.7l-57.9-38.8c-19.2 28.5-45.9 47.2-83.8 47.2-38.3 0-65.1-17.4-82.9-51.7l228.1-94.5c0 .1-8-19-8-19zm-232.6 57c-1.8-65.9 51.2-99.4 89.1-99.4 29.9 0 54.8 14.7 63.3 36.1l-152.4 63.3zM3313.6 1203h74.9V701.8h-74.9V1203zm-123-292.7h-2.7c-16.9-20.1-49-38.3-90-38.3-85.1 0-163.5 74.9-163.5 171.1 0 95.8 78 169.8 163.5 169.8 40.5 0 73.1-18.3 90-38.8h2.7v24.5c0 65.1-34.8 100.2-90.9 100.2-45.9 0-74.4-33-86-60.6l-65.1 27.2c18.7 45 68.6 100.7 151 100.7 87.8 0 162.2-51.7 162.2-177.8V882.2H3191v28.1h-.4zm-86 235.7c-51.7 0-94.9-43.2-94.9-102.9 0-60.2 43.2-103.8 94.9-103.8 51.2 0 90.9 44.1 90.9 103.8.5 59.7-39.6 102.9-90.9 102.9zm977.6-444.2h-179.1V1203h74.9v-189.8h104.3c82.9 0 164.4-60.1 164.4-155.5s-81.2-155.9-164.5-155.9zm2.2 241.4h-106.5v-172h106.5c56.1 0 87.8 46.3 87.8 86 0 39.3-32.1 86-87.8 86zm462.5-71.7c-54.4 0-110.5 24.1-133.7 76.6l66.4 27.6c14.3-27.6 40.5-37 68.2-37 38.8 0 78 23.2 78.9 64.6v5.3c-13.4-7.6-42.8-19.2-78-19.2-71.7 0-144.4 39.2-144.4 112.7 0 67.3 58.8 110.5 124.3 110.5 50.3 0 78-22.7 95.3-49h2.7v38.8h72.2v-192c0-89.4-66.4-138.9-151.9-138.9zm-9.4 274.5c-24.5 0-58.8-12-58.8-42.8 0-38.8 42.8-53.5 79.3-53.5 33 0 48.6 7.1 68.2 16.9-5.4 45-43.4 79-88.7 79.4zm424.7-263.8-86 217.4h-2.7l-89.1-217.4h-80.6l133.7 303.9-76.2 168.9h78L5045 882.2h-82.8zM4288 1203h74.9V701.8H4288V1203z" fillRule="evenodd" clipRule="evenodd" fill="#fff"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1682.108" y1="1339.478" x2="1624.292" y2="1309.634" gradientTransform="matrix(11.64 0 0 -22.55 -18705.596 30554.37)"><stop offset="0" stopColor="#00a0ff"/><stop offset=".007" stopColor="#00a1ff"/><stop offset=".26" stopColor="#00beff"/><stop offset=".512" stopColor="#00d2ff"/><stop offset=".76" stopColor="#00dfff"/><stop offset="1" stopColor="#00e3ff"/></linearGradient><path d="M418.4 302.1c-11.6 12.5-18.3 31.6-18.3 56.6v886.7c0 25 6.7 44.1 18.7 56.1l3.1 2.7 496.8-496.8v-11.1L421.5 299.4l-3.1 2.7z" fillRule="evenodd" clipRule="evenodd" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1712.662" y1="1274.838" x2="1606.561" y2="1274.838" gradientTransform="matrix(9.145 0 0 -7.7 -14305.538 10618.251)"><stop offset="0" stopColor="#ffe000"/><stop offset=".409" stopColor="#ffbd00"/><stop offset=".775" stopColor="orange"/><stop offset="1" stopColor="#ff9c00"/></linearGradient><path d="M1084 973.5 918.3 807.8v-11.6L1084 630.5l3.6 2.2 196 111.4c56.1 31.6 56.1 83.8 0 115.8l-196 111.4-3.6 2.2z" fillRule="evenodd" clipRule="evenodd" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1707.441" y1="1290.047" x2="1646.682" y2="1211.223" gradientTransform="matrix(15.02 0 0 -11.5775 -24650.229 15829.648)"><stop offset="0" stopColor="#ff3a44"/><stop offset="1" stopColor="#c31162"/></linearGradient><path d="M1087.6 971.3 918.3 802l-499.9 499.9c18.3 19.6 49 21.8 83.3 2.7l585.9-333.3" fillRule="evenodd" clipRule="evenodd" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1660.636" y1="1365.668" x2="1687.767" y2="1330.45" gradientTransform="matrix(15.02 0 0 -11.5715 -24650.229 15809.992)"><stop offset="0" stopColor="#32a071"/><stop offset=".069" stopColor="#2da771"/><stop offset=".476" stopColor="#15cf74"/><stop offset=".801" stopColor="#06e775"/><stop offset="1" stopColor="#00f076"/></linearGradient><path d="M1087.6 632.7 501.7 299.9c-34.3-19.6-65.1-16.9-83.3 2.7L918.3 802l169.3-169.3z" fillRule="evenodd" clipRule="evenodd" fill="url(#d)"/><path d="m1084 967.7-581.9 330.6c-32.5 18.7-61.5 17.4-80.2.4l-3.1 3.1 3.1 2.7c18.7 16.9 47.7 18.3 80.2-.4L1088 971.3l-4-3.6z" opacity=".2" fillRule="evenodd" clipRule="evenodd"/><path d="m1283.6 854.1-200.1 113.6 3.6 3.6 196-111.4c28.1-16 41.9-37 41.9-57.9-1.7 19.2-16 37.4-41.4 52.1z" opacity=".12" fillRule="evenodd" clipRule="evenodd"/><path d="m501.7 305.7 781.9 444.2c25.4 14.3 39.7 33 41.9 52.1 0-20.9-13.8-41.9-41.9-57.9L501.7 299.9c-56.1-32.1-101.6-5.3-101.6 58.8v5.8c0-64.2 45.5-90.5 101.6-58.8z" opacity=".25" fillRule="evenodd" clipRule="evenodd" fill="#fff"/></svg>
              </a>
            </div>

            <div className="w-full 2xl:space-x-8 hidden md:flex md:flex-wrap">
              <a href="mailto:bonjour@homagames.com" className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block hover:opacity-75 focus:opacity-75">bonjour@homagames.com</a>
              <a href="tel:+33142861324" className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block hover:opacity-75 focus:opacity-75">+33 1 42 86 13 24</a>
              <span className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block 2xl:mr-6">Privacy</span>
              <span className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block">Terms</span>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-6 xl:col-span-5 2xl:col-span-4 md:col-start-7 xl:col-start-8 2xl:col-start-9">
          <div className="flex flex-wrap">
            <nav className="w-full md:w-1/2 text-sm md:text-base mb-16 md:mb-0">
              <ul className="w-full">
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Homa Lab"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Ideas"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Market Watcher"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Homa SDK"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Dev Tools"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Data Analytics"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="block mb-4 md:mb-16 xl:mb-24">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Homa Academy"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>


                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/"
                    a11yText="Navigate to the home page"
                    label="Home"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/games"
                    a11yText="Navigate to the games page"
                    label="Games"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Homa Lab"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/community"
                    a11yText="Navigate to the community page"
                    label="Community"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/about"
                    a11yText="Navigate to the about page"
                    label="About"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <FancyLink
                    destination="/careers"
                    a11yText="Navigate to the careers page"
                    label="Careers"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="block">
                  <FancyLink
                    destination="/blog"
                    a11yText="Navigate to the blog page"
                    label="Blog"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
              </ul>
            </nav>

            <div className="w-full md:w-1/2 text-sm md:text-base mb-16 md:mb-0">
              <span className="block uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none mb-4 md:mb-6 xl:mb-10">For Developers &amp; Studios</span>
              
              <ul className="w-full mb-10 md:mb-16 xl:mb-24">
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">/homagames</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">/homa-games</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">/homagames</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">@homagames</span>
                  </a>
                </li>
              </ul>


              <span className="block uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none mb-4 md:mb-6 xl:mb-10">For Our Web3 Community</span>
              
              <ul className="w-full mb-10 md:mb-16 xl:mb-24">
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">/homagames</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">@homagames</span>
                  </a>
                </li>
              </ul>

              <span className="block uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none mb-4 md:mb-6 xl:mb-10">For The Fans</span>
              
              <ul className="w-full">
                <li className="block mb-4 md:mb-6 xl:mb-10">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4"></span>
                    <span className="block break-all">@homagames</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>


      {/* Mobile Logo */}
      <div className="grid grid-cols-5 md:grid-cols-12">
        <div className="col-span-5 block md:hidden">
          <svg className="w-full mb-12" viewBox="0 0 560 208" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M381.51 130.803h35.426V0H286.133v130.803h35.426V35.426h12.262v95.377h35.426V35.426h12.263v95.377ZM273.867 0H143.064v130.803h130.803V0Zm-35.426 95.377H178.49V35.426h59.951v59.951ZM429.197 0v130.803h35.426v-29.976h59.951v29.976H560V0H429.197Zm95.377 65.401h-59.951V35.426h59.951V65.4ZM95.377 130.803h35.426V0H95.377v47.688H35.426V0H0v130.803h35.426V83.114h59.951v47.689ZM5.028 173.979H0v28.109h5.028v-28.109ZM30.14 188.08H15.07v5.028h10.042v8.965h5.028V188.08Z" fill="#fff"/><path d="M25.111 202.079H5.027v5.028h20.084v-5.028ZM25.111 168.951H5.027v5.028h20.084v-5.028ZM30.141 173.979h-5.028v6.473h5.028v-6.473ZM61.657 168.951H51.615v5.028h10.042v-5.028ZM66.682 190.588H46.598v-11.595H41.57v28.109h5.028v-11.486h20.084v11.486h5.027v-28.109h-5.027v11.595Z" fill="#fff"/><path d="M51.625 173.979h-5.027v5.028h5.027v-5.028ZM66.68 173.979h-5.028v5.028h5.028v-5.028ZM113.389 178.789h-5.082v5.014h5.082v23.299h5.014v-38.151h-5.014v9.838Z" fill="#fff"/><path d="M108.309 183.809h-5.028v13.257h5.028v-13.257Z" fill="#fff"/><path d="M103.293 197.065h-5.027v5.028h5.027v-5.028ZM88.155 178.789v-9.838H83.14v38.151h5.014v-23.299h5.082v-5.014h-5.082ZM98.264 183.809h-5.028v13.257h5.028v-13.257ZM155.056 168.951h-20.138v5.028h20.138v-5.028ZM155.056 202.079h-20.138v5.028h20.138v-5.028ZM129.832 202.075h5.082v-11.65h15.124v-5.014h-15.124v-11.432h-5.082v28.096ZM190.156 173.979h12.713v33.123h5.082v-33.123h12.767v-5.028h-30.562v5.028ZM255.91 185.302h-20.084v-16.351h-5.082v38.151h5.082v-16.773h20.084v16.773h5.082v-38.151h-5.082v16.351ZM272.137 202.075h5.082v-11.65h15.11v-5.014h-15.11v-11.432h-5.082v28.096ZM297.359 168.951h-20.138v5.028h20.138v-5.028ZM297.359 202.079h-20.138v5.028h20.138v-5.028ZM337.473 173.979h-5.028v11.323h5.028v-11.323ZM357.607 168.951h-20.138v5.028h20.138v-5.028ZM357.607 185.306h-20.138v5.027h20.138v-5.027ZM357.607 202.079h-20.138v5.028h20.138v-5.028Z" fill="#fff"/><path d="M337.473 197.065h-5.028v5.028h5.028v-5.028ZM362.694 190.334h-5.083v11.759h5.083v-11.759ZM362.694 173.979h-5.083v5.028h5.083v-5.028ZM392.842 185.574h-4.973v5.014h5.028v-5.014h4.959v-16.623h-5.014v16.623ZM382.801 185.577h-5.028v5.028h5.028v-5.028ZM377.776 168.951h-5.028v16.623h5.028v-16.623ZM387.869 190.592h-5.068v16.514h5.068v-16.514ZM413.582 173.979h-5.027v11.323h5.027v-11.323ZM433.707 168.951h-20.139v5.028h20.139v-5.028ZM433.707 185.306h-20.139v5.027h20.139v-5.027ZM438.801 173.979h-5.082v5.028h5.082v-5.028ZM438.801 190.334h-5.082v11.759h5.082v-11.759ZM413.584 197.065h-5.027v5.028h5.027v-5.028Z" fill="#fff"/><path d="M433.707 202.079h-20.139v5.028h20.139v-5.028ZM448.859 173.979h12.713v33.123h5.082v-33.123h12.767v-5.028h-30.562v5.028ZM514.666 168.951h-20.139v5.028h20.139v-5.028ZM514.666 202.079h-20.139v5.028h20.139v-5.028ZM489.449 202.075h5.082v-11.65h15.125v-5.014h-15.125v-11.432h-5.082v28.096ZM549.903 183.809h-5.028v13.257h5.028v-13.257ZM539.86 183.809h-5.028v13.257h5.028v-13.257ZM554.971 178.789h-5.069v5.014h5.069v23.299h5.028v-38.151h-5.028v9.838ZM529.748 178.789v-9.838h-5.014v38.151h5.014v-23.299h5.083v-5.014h-5.083Z" fill="#fff"/><path d="M544.889 197.065h-5.028v5.028h5.028v-5.028Z" fill="#fff"/></svg>

          <div className="w-full 2xl:space-x-8">
            <a href="mailto:bonjour@homagames.com" className="w-full 2xl:w-auto text-white/40 block mb-2 hover:opacity-75 focus:opacity-75">bonjour@homagames.com</a>
            <a href="tel:+33142861324" className="w-full 2xl:w-auto text-white/40 block mb-2 hover:opacity-75 focus:opacity-75">+33 1 42 86 13 24</a>
            <span className="w-full 2xl:w-auto text-white/40 block mb-2 2xl:mr-6">Privacy</span>
            <span className="w-full 2xl:w-auto text-white/40 block">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}