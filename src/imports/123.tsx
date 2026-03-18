import svgPaths from "./svg-gnwr88ww67";
import imgImage from "figma:asset/57298701ef1a2253943812983bfff11c4e378284.png";
import imgImg from "figma:asset/ebb34e04cf6c3508d19a598e3b9687d32e1b84bf.png";
import imgImageWithFallback from "figma:asset/95cd9ea53c9020e6641778919c718a2c54c6038e.png";

function Camera() {
  return (
    <div className="-translate-y-1/2 absolute opacity-70 right-[12.89px] size-[9.371px] top-[calc(50%-0.59px)]" data-name="Camera">
      <div className="absolute inset-[0_0_-3.35%_-3.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74286 9.68571">
          <g id="Camera">
            <circle cx="4.68571" cy="5" fill="url(#paint0_radial_136_3520)" fillOpacity="0.5" id="Outer" r="4.68571" />
            <g id="Base">
              <g filter="url(#filter0_ii_136_3520)">
                <path clipRule="evenodd" d={svgPaths.p2aec3400} fill="var(--fill-0, #072244)" fillRule="evenodd" />
              </g>
              <path d={svgPaths.p227eca00} stroke="var(--stroke-0, #333333)" strokeWidth="0.585714" />
            </g>
            <g filter="url(#filter1_f_136_3520)" id="Hightlight">
              <circle cx="4.97857" cy="4.15389" fill="var(--fill-0, #03DBF8)" r="0.878571" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p2ce749c0} fill="var(--fill-0, #14AAC8)" fillOpacity="0.7" fillRule="evenodd" id="Hightlight_2" />
            <circle cx="3.51429" cy="5" fill="var(--fill-0, #30A4B9)" fillOpacity="0.7" id="Hightlight_3" r="0.585714" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.85714" id="filter0_ii_136_3520" width="5.85714" x="1.75714" y="2.07143">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.17143" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.404235 0 0 0 0 0.652716 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_136_3520" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.585714" dy="-0.585714" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0684938 0 0 0 0 0.302844 0 0 0 0 0.439971 0 0 0 0.559369 0" />
              <feBlend in2="effect1_innerShadow_136_3520" mode="normal" result="effect2_innerShadow_136_3520" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.94142" id="filter1_f_136_3520" width="4.94142" x="2.50786" y="1.68318">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_136_3520" stdDeviation="0.796068" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.01827 8.21113) rotate(118.879) scale(5.47528)" gradientUnits="userSpaceOnUse" id="paint0_radial_136_3520" r="1">
              <stop stopColor="#464646" />
              <stop offset="1" stopColor="#262626" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CameraArray() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[9.37px] top-1/2" data-name="Camera Array">
      <Camera />
      <div className="-translate-y-1/2 absolute opacity-70 right-[11.13px] size-[12.3px] top-[calc(50%-55.35px)]" data-name="IFRD Camera">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 12.3">
          <circle cx="6.15" cy="6.15" fill="var(--fill-0, black)" id="IFRD Camera" r="6.15" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute opacity-70 right-[9.37px] size-[15.814px] top-[calc(50%-28.7px)]" data-name="Sensor">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8143 15.8143">
          <circle cx="7.90714" cy="7.90714" fill="var(--fill-0, black)" id="Sensor" r="7.90714" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute opacity-70 right-[9.37px] size-[15.814px] top-[calc(50%+53.59px)]" data-name="Dot Projector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8143 15.8143">
          <circle cx="7.90714" cy="7.90714" fill="var(--fill-0, black)" id="Sensor" r="7.90714" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute opacity-70 right-[15.23px] size-[4.686px] top-[calc(50%+24.6px)]" data-name="Microphone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.68571 4.68571">
          <circle cx="2.34286" cy="2.34286" fill="var(--fill-0, black)" id="Microphone" r="2.34286" />
        </svg>
      </div>
    </div>
  );
}

function Device() {
  return (
    <div className="absolute inset-[2.34px_1.76px]" data-name="Device">
      <div className="absolute bottom-[55.64px] flex h-[48.029px] items-center justify-center right-[-2.93px] w-[2.343px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[2.343px] relative w-[48.029px]" data-name="Power Button">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.0286 2.34286">
              <path d={svgPaths.p15698a80} fill="url(#paint0_linear_136_3495)" id="Power Button" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_136_3495" x1="-1.87963e-07" x2="48.0286" y1="2.34286" y2="2.34286">
                  <stop stopColor="#F9FAFB" />
                  <stop offset="0.0484895" stopColor="#5F6161" />
                  <stop offset="0.105099" stopColor="#F6F6F6" />
                  <stop offset="0.903186" stopColor="#F2F4F5" />
                  <stop offset="0.95255" stopColor="#727475" />
                  <stop offset="1" stopColor="#F1F3F5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-2.93px] h-[2.343px] right-[127.1px] rounded-[2px] w-[42.171px]" data-name="Volumen Down" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(95, 97, 97) 9.8559%, rgb(246, 246, 246) 17.01%, rgb(242, 244, 245) 83.768%, rgb(114, 116, 117) 91.806%, rgb(241, 243, 245) 100%)" }} />
      <div className="absolute bottom-[-2.93px] h-[2.343px] right-[77.9px] rounded-[2px] w-[42.171px]" data-name="Volume Up" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(95, 97, 97) 9.8559%, rgb(246, 246, 246) 17.01%, rgb(242, 244, 245) 83.768%, rgb(114, 116, 117) 91.806%, rgb(241, 243, 245) 100%)" }} />
      <div className="absolute inset-[-0.22%_-0.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1138.51 818.514">
          <g id="Bezel">
            <path d={svgPaths.p15c6bb00} fill="var(--fill-0, #0E0E0E)" />
            <path d={svgPaths.p15c6bb00} stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="1.75714" />
            <path d={svgPaths.p15c6bb00} stroke="var(--stroke-1, #28292A)" strokeOpacity="0.4" strokeWidth="1.75714" />
            <path d={svgPaths.p15c6bb00} stroke="var(--stroke-2, #9FA0A1)" strokeWidth="1.75714" />
            <path d={svgPaths.p15c6bb00} stroke="var(--stroke-3, #F8F8F8)" strokeOpacity="0.5" strokeWidth="1.75714" />
          </g>
        </svg>
      </div>
      <CameraArray />
    </div>
  );
}

function Span() {
  return (
    <div className="h-[15.765px] relative shrink-0 w-[24.851px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] left-0 not-italic text-[#fdcb1b] text-[10.51px] top-[0.58px] tracking-[1.2301px] uppercase whitespace-nowrap">2nd</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[30.991px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] left-0 not-italic text-[10.51px] text-white top-[0.58px] tracking-[0.3329px] whitespace-nowrap">14:32</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.529px] items-center left-[18.68px] top-[12.26px] w-[30.991px]" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] h-[37.368px] left-[68.36px] top-[9.34px] w-[1.168px]" data-name="Container" />;
}

function Img() {
  return (
    <div className="absolute h-[28.026px] left-0 top-[4.67px] w-[49.821px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Span2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[28.099px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[17.516px] left-0 not-italic text-[11.68px] text-white top-[0.58px] tracking-[0.7321px] whitespace-nowrap">NJD</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[14.013px] relative shrink-0 w-[28.099px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.013px] left-0 not-italic text-[9.34px] text-[rgba(255,255,255,0.6)] top-[0.58px] tracking-[0.4102px] whitespace-nowrap">Devils</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.529px] items-start left-[56.83px] top-[2.92px] w-[28.099px]" data-name="Container">
      <Span2 />
      <Span3 />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute h-[37.368px] left-[96.6px] top-0 w-[18.657px]" data-name="span">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[37.368px] left-0 not-italic text-[28.03px] text-white top-0 tracking-[0.1402px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[37.368px] left-[83.54px] top-[9.34px] w-[115.261px]" data-name="Container">
      <Img />
      <Container6 />
      <Span4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[23.355px] left-[217.49px] top-[16.35px] w-[10.09px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[23.355px] left-0 not-italic text-[16.35px] text-[rgba(255,255,255,0.4)] top-[0.58px] tracking-[-0.2998px] whitespace-nowrap">–</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute h-[37.368px] left-0 top-0 w-[14.424px]" data-name="span">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[37.368px] left-0 not-italic text-[28.03px] text-white top-0 tracking-[0.1402px] whitespace-nowrap">1</p>
    </div>
  );
}

function Span6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[25.244px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[17.516px] left-0 not-italic text-[11.68px] text-white top-[0.58px] tracking-[0.7321px] whitespace-nowrap">BUF</p>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="h-[14.013px] relative shrink-0 w-[31.94px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.013px] left-0 not-italic text-[9.34px] text-[rgba(255,255,255,0.6)] top-[0.58px] tracking-[0.4102px] whitespace-nowrap">Sabres</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.529px] items-end left-[26.1px] top-[2.92px] w-[31.94px]" data-name="Container">
      <Span6 />
      <Span7 />
    </div>
  );
}

function Span8() {
  return (
    <div className="h-[12.261px] relative shrink-0 w-[18.036px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[12.261px] left-0 not-italic text-[8.17px] text-white top-0 tracking-[0.4588px] whitespace-nowrap">BUF</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#003e7e] content-stretch flex items-center justify-center left-[65.05px] pr-[0.009px] rounded-[19591680.321px] size-[28.026px] top-[4.67px]" data-name="Container">
      <Span8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[37.368px] left-[246.26px] top-[9.34px] w-[93.074px]" data-name="Container">
      <Span5 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return <div className="absolute h-0 left-[353.35px] top-[28.03px] w-[393.972px]" data-name="Container" />;
}

function Container13() {
  return <div className="bg-white opacity-54 rounded-[19591680.321px] shrink-0 size-[7.007px]" data-name="Container" />;
}

function Span9() {
  return (
    <div className="flex-[1_0_0] h-[17.516px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[17.516px] left-0 not-italic text-[11.68px] text-white top-[0.58px] tracking-[0.7321px] uppercase whitespace-nowrap">Live</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#ce1126] content-stretch flex gap-[7.007px] h-[26.858px] items-center left-[535.93px] px-[11.678px] rounded-[19591680.321px] top-[14.6px] w-[65.44px]" data-name="Container">
      <Container13 />
      <Span9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.85)] h-[56.229px] left-0 to-[rgba(0,0,0,0.7)] top-0 w-[637.257px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container7 />
      <Container8 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Play() {
  return (
    <div className="h-[21.02px] overflow-clip relative shrink-0 w-full" data-name="Play">
      <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0131 17.5163">
            <path d={svgPaths.p3550f000} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75163" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.68px] size-[21.02px] top-[14.01px]" data-name="button">
      <Play />
    </div>
  );
}

function Span10() {
  return (
    <div className="absolute h-[19.268px] left-[505.47px] top-[14.89px] w-[27.342px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.268px] left-0 not-italic text-[12.85px] text-white top-[0.58px] tracking-[0.1285px] whitespace-nowrap">LIVE</p>
    </div>
  );
}

function Volume() {
  return (
    <div className="h-[18.684px] overflow-clip relative shrink-0 w-full" data-name="Volume2">
      <div className="absolute inset-[16.66%_54.17%_16.65%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.56355 14.0177">
            <path d={svgPaths.p8e52180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_29.17%_37.5%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-100%_-16.67%_-100.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33556 6.22813">
            <path d={svgPaths.pbe88840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[23.48%_8.33%_23.48%_80.68%]" data-name="Vector">
        <div className="absolute inset-[-7.86%_-37.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.60921 11.4658">
            <path d={svgPaths.p13d6580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[546.83px] size-[18.684px] top-[15.18px]" data-name="button">
      <Volume />
    </div>
  );
}

function Settings() {
  return (
    <div className="h-[18.684px] overflow-clip relative shrink-0 w-full" data-name="Settings">
      <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5975 17.1271">
            <path d={svgPaths.p12f13af0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.22803 6.22803">
            <path d={svgPaths.p3685d770} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[579.52px] size-[18.684px] top-[15.18px]" data-name="button">
      <Settings />
    </div>
  );
}

function Maximize() {
  return (
    <div className="h-[18.684px] overflow-clip relative shrink-0 w-full" data-name="Maximize2">
      <div className="absolute inset-[12.5%_12.5%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.22803 6.22803">
            <path d={svgPaths.p196a4280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.22803 6.22803">
            <path d={svgPaths.p3e67c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_58.33%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00654 7.00654">
            <path d={svgPaths.p288dd2e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_58.33%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00654 7.00654">
            <path d={svgPaths.pbdd9a84} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[612.22px] size-[18.684px] top-[15.18px]" data-name="button">
      <Maximize />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#2390f1] h-[4.671px] left-0 rounded-[19591680.321px] top-0 w-[285.115px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute bg-white left-[278.11px] rounded-[19591680.321px] shadow-[0px_1.168px_3.503px_0px_rgba(0,0,0,0.1),0px_1.168px_2.336px_0px_rgba(0,0,0,0.1)] size-[14.013px] top-[-4.67px]" data-name="Container" />;
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] h-[4.686px] left-[53.89px] rounded-[19591680.321px] top-[22.26px] w-[416.443px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[49.2px] left-0 to-[rgba(0,0,0,0)] top-[695.83px] w-[637.257px]" data-name="Container">
      <Button />
      <Span10 />
      <Button1 />
      <Button2 />
      <Button3 />
      <Container15 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[639.93px] left-0 top-0 w-[845.456px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[640.186px] left-0 to-[rgba(0,0,0,0.1)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[637.257px]" data-name="Container" />;
}

function P() {
  return (
    <div className="h-[15.765px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] left-[100.73px] not-italic text-[#2390f1] text-[10.51px] text-right top-[0.58px] tracking-[0.3329px] uppercase whitespace-nowrap">Shot Attempt %</p>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-full absolute font-['Inter:Black',sans-serif] font-black leading-[18.684px] left-[101.38px] not-italic text-[14.01px] text-right text-white top-[1.17px] whitespace-nowrap">NJD 58.4%</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col h-[48.462px] items-start left-[703.24px] pt-[7.007px] px-[11.678px] rounded-[4.671px] top-[516.73px] w-[123.536px]" data-name="Container">
      <P />
      <P1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-black h-[639.6px] left-0 overflow-clip top-[56.23px] w-[637.257px]" data-name="Container">
      <ImageWithFallback />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[745.028px] relative shrink-0 w-[637.257px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container14 />
        <Container18 />
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[30.955px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[18.684px] left-0 not-italic text-[#2390f1] text-[14.01px] top-[1.17px] whitespace-nowrap">NHL</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.009px] relative size-full">
        <Span11 />
      </div>
    </div>
  );
}

function Span12() {
  return (
    <div className="h-[23.355px] relative shrink-0 w-[197.926px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[23.355px] left-0 not-italic text-[16.35px] text-white top-[0.58px] tracking-[0.398px] uppercase whitespace-nowrap">NHL Power Rankings</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#2390f1] h-[60.723px] relative shrink-0 w-[419.224px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.342px] items-center pl-[18.684px] relative size-full">
        <Container26 />
        <Span12 />
      </div>
    </div>
  );
}

function Span13() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.4)] top-[1.17px] whitespace-nowrap">#</p>
      </div>
    </div>
  );
}

function Span14() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.4)] top-[1.17px] whitespace-nowrap">TEAM</p>
      </div>
    </div>
  );
}

function Span15() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.63px] not-italic text-[14.01px] text-[rgba(255,255,255,0.4)] text-center top-[1.17px] whitespace-nowrap">W</p>
      </div>
    </div>
  );
}

function Span16() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.8px] not-italic text-[14.01px] text-[rgba(255,255,255,0.4)] text-center top-[1.17px] whitespace-nowrap">L</p>
      </div>
    </div>
  );
}

function Span17() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.5px] not-italic text-[14.01px] text-[rgba(255,255,255,0.4)] text-center top-[1.17px] whitespace-nowrap">OTL</p>
      </div>
    </div>
  );
}

function Span18() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.47px] not-italic text-[14.01px] text-[rgba(255,255,255,0.4)] text-center top-[1.17px] whitespace-nowrap">PTS</p>
      </div>
    </div>
  );
}

function Span19() {
  return <div className="h-0 shrink-0 w-[23.355px]" data-name="span" />;
}

function Container27() {
  return (
    <div className="bg-[#111827] h-[32.697px] relative shrink-0 w-[419.224px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.342px] items-center px-[18.684px] relative size-full">
        <Span13 />
        <Span14 />
        <Span15 />
        <Span16 />
        <Span17 />
        <Span18 />
        <Span19 />
      </div>
    </div>
  );
}

function Span20() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#8f5424] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">CA</p>
      </div>
    </div>
  );
}

function Span21() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">COLORADO AVALANCHE</p>
      </div>
    </div>
  );
}

function Span22() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.85px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">32</p>
      </div>
    </div>
  );
}

function Span23() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.93px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function Span24() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Span25() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.15px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">69</p>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p3d79cbf0} fill="var(--fill-0, #FDCB1B)" id="Vector" stroke="var(--stroke-0, #FDCB1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#0d1220] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span20 />
          <Container30 />
          <Span21 />
          <Span22 />
          <Span23 />
          <Span24 />
          <Span25 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Span26() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#8f8424] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">FP</p>
      </div>
    </div>
  );
}

function Span27() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">FLORIDA PANTHERS</p>
      </div>
    </div>
  );
}

function Span28() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.95px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">31</p>
      </div>
    </div>
  );
}

function Span29() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.82px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Span30() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.52px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Span31() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.15px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">66</p>
      </div>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p201dba00} fill="var(--fill-0, #FDCB1B)" id="Vector" stroke="var(--stroke-0, #FDCB1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star1 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#0a0f1c] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span26 />
          <Container32 />
          <Span27 />
          <Span28 />
          <Span29 />
          <Span30 />
          <Span31 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Span32() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#698f24] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">BL</p>
      </div>
    </div>
  );
}

function Span33() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">TAMPA BAY LIGHTNING</p>
      </div>
    </div>
  );
}

function Span34() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.95px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">30</p>
      </div>
    </div>
  );
}

function Span35() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.95px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">13</p>
      </div>
    </div>
  );
}

function Span36() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.52px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Span37() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">64</p>
      </div>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.pa89a080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star2 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#0d1220] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span32 />
          <Container34 />
          <Span33 />
          <Span34 />
          <Span35 />
          <Span36 />
          <Span37 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Span38() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#398f24] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">PP</p>
      </div>
    </div>
  );
}

function Span39() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">PITTSBURGH PENGUINS</p>
      </div>
    </div>
  );
}

function Span40() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.78px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">29</p>
      </div>
    </div>
  );
}

function Span41() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.83px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Span42() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.52px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Span43() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.14px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">62</p>
      </div>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p26f5d200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star3 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#0a0f1c] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span38 />
          <Container36 />
          <Span39 />
          <Span40 />
          <Span41 />
          <Span42 />
          <Span43 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Span44() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#248f3e] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">CH</p>
      </div>
    </div>
  );
}

function Span45() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">CAROLINA HURRICANES</p>
      </div>
    </div>
  );
}

function Span46() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.77px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">28</p>
      </div>
    </div>
  );
}

function Span47() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.83px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Span48() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Span49() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.18px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">61</p>
      </div>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p30b4da40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star4 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#0d1220] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span44 />
          <Container38 />
          <Span45 />
          <Span46 />
          <Span47 />
          <Span48 />
          <Span49 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Span50() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#248f6f] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">BB</p>
      </div>
    </div>
  );
}

function Span51() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">BOSTON BRUINS</p>
      </div>
    </div>
  );
}

function Span52() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.96px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">27</p>
      </div>
    </div>
  );
}

function Span53() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.72px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">15</p>
      </div>
    </div>
  );
}

function Span54() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Span55() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.28px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">59</p>
      </div>
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p3ee38d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star5 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#0a0f1c] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span50 />
          <Container40 />
          <Span51 />
          <Span52 />
          <Span53 />
          <Span54 />
          <Span55 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Span56() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#247f8f] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">YR</p>
      </div>
    </div>
  );
}

function Span57() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">NEW YORK RANGERS</p>
      </div>
    </div>
  );
}

function Span58() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.96px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">27</p>
      </div>
    </div>
  );
}

function Span59() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.87px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">16</p>
      </div>
    </div>
  );
}

function Span60() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.52px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Span61() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.21px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">58</p>
      </div>
    </div>
  );
}

function Star6() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p2f85c200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star6 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#0d1220] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span56 />
          <Container42 />
          <Span57 />
          <Span58 />
          <Span59 />
          <Span60 />
          <Span61 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Span62() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#244f8f] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">ML</p>
      </div>
    </div>
  );
}

function Span63() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">TORONTO MAPLE LEAFS</p>
      </div>
    </div>
  );
}

function Span64() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.78px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">26</p>
      </div>
    </div>
  );
}

function Span65() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.87px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">16</p>
      </div>
    </div>
  );
}

function Span66() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Span67() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[24.42px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">57</p>
      </div>
    </div>
  );
}

function Star7() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.pd45b700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star7 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#0a0f1c] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span62 />
          <Container44 />
          <Span63 />
          <Span64 />
          <Span65 />
          <Span66 />
          <Span67 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Span68() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#29248f] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">LB</p>
      </div>
    </div>
  );
}

function Span69() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">ST. LOUIS BLUES</p>
      </div>
    </div>
  );
}

function Span70() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.78px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">26</p>
      </div>
    </div>
  );
}

function Span71() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.76px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">17</p>
      </div>
    </div>
  );
}

function Span72() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.52px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Span73() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.28px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">56</p>
      </div>
    </div>
  );
}

function Star8() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p20228000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star8 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#0d1220] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span68 />
          <Container46 />
          <Span69 />
          <Span70 />
          <Span71 />
          <Span72 />
          <Span73 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Span74() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#59248f] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">NP</p>
      </div>
    </div>
  );
}

function Span75() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">NASHVILLE PREDATORS</p>
      </div>
    </div>
  );
}

function Span76() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.9px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Span77() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.76px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">17</p>
      </div>
    </div>
  );
}

function Span78() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Span79() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.13px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">55</p>
      </div>
    </div>
  );
}

function Star9() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p8d49f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star9 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#0a0f1c] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span74 />
          <Container48 />
          <Span75 />
          <Span76 />
          <Span77 />
          <Span78 />
          <Span79 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function Span80() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">11</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#89248f] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">MW</p>
      </div>
    </div>
  );
}

function Span81() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.85)] top-[1.17px] tracking-[0.5981px] whitespace-nowrap">MINNESOTA WILD</p>
      </div>
    </div>
  );
}

function Span82() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.83px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">24</p>
      </div>
    </div>
  );
}

function Span83() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[19.74px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">18</p>
      </div>
    </div>
  );
}

function Span84() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.41px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Span85() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.38px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">53</p>
      </div>
    </div>
  );
}

function Star10() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p1d33a100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star10 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#0d1220] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span80 />
          <Container50 />
          <Span81 />
          <Span82 />
          <Span83 />
          <Span84 />
          <Span85 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Span86() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#ce1126] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">JD</p>
      </div>
    </div>
  );
}

function Span87() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-white top-[1.17px] tracking-[0.5981px] whitespace-nowrap">NEW JERSEY DEVILS</p>
      </div>
    </div>
  );
}

function Span88() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.83px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">24</p>
      </div>
    </div>
  );
}

function Span89() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[19.74px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">18</p>
      </div>
    </div>
  );
}

function Span90() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.52px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Span91() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.27px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">52</p>
      </div>
    </div>
  );
}

function Star11() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p69f3e00} fill="var(--fill-0, #FDCB1B)" id="Vector" stroke="var(--stroke-0, #FDCB1B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star11 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[rgba(35,144,241,0.12)] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span86 />
          <Container52 />
          <Span87 />
          <Span88 />
          <Span89 />
          <Span90 />
          <Span91 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Span92() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[28.026px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18.684px] left-0 not-italic text-[14.01px] text-[rgba(255,255,255,0.5)] top-[1.17px] whitespace-nowrap">13</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#003e7e] relative rounded-[19591680.321px] shrink-0 size-[32.697px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15.765px] not-italic relative shrink-0 text-[10.51px] text-white tracking-[0.3329px] whitespace-nowrap">BS</p>
      </div>
    </div>
  );
}

function Span93() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-0 not-italic text-[14.01px] text-white top-[1.17px] tracking-[0.5981px] whitespace-nowrap">BUFFALO SABRES</p>
      </div>
    </div>
  );
}

function Span94() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.87px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">16</p>
      </div>
    </div>
  );
}

function Span95() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[37.368px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[18.9px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Span96() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.684px] left-[23.29px] not-italic text-[14.01px] text-[rgba(255,255,255,0.75)] text-center top-[1.17px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Span97() {
  return (
    <div className="h-[18.684px] relative shrink-0 w-[46.71px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.684px] left-[23.17px] not-italic text-[14.01px] text-center text-white top-[1.17px] whitespace-nowrap">38</p>
      </div>
    </div>
  );
}

function Star12() {
  return (
    <div className="relative shrink-0 size-[16.349px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3486 16.3486">
        <g id="Star">
          <path d={svgPaths.p8d49f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.36238" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[16.349px] relative shrink-0 w-[23.355px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Star12 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(35,144,241,0.12)] h-[57.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.342px] items-center pb-[1.168px] px-[18.684px] relative size-full">
          <Span92 />
          <Container54 />
          <Span93 />
          <Span94 />
          <Span95 />
          <Span96 />
          <Span97 />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[419.224px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container29 />
        <Container31 />
        <Container33 />
        <Container35 />
        <Container37 />
        <Container39 />
        <Container41 />
        <Container43 />
        <Container45 />
        <Container47 />
        <Container49 />
        <Container51 />
        <Container53 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[837.281px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[697.15px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[697.15px] items-start left-[1.17px] overflow-clip top-[47.88px] w-[419.224px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Trophy() {
  return (
    <div className="absolute left-[14.01px] size-[18.684px] top-[14.01px]" data-name="Trophy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6841 18.6841">
        <g id="Trophy">
          <path d={svgPaths.p166c6f00} id="Vector" stroke="var(--stroke-0, #2390F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          <path d={svgPaths.p9a6f300} id="Vector_2" stroke="var(--stroke-0, #2390F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          <path d="M3.11406 17.1271H15.5701" id="Vector_3" stroke="var(--stroke-0, #2390F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          <path d={svgPaths.p1da78bc0} id="Vector_4" stroke="var(--stroke-0, #2390F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          <path d={svgPaths.p1f31ae80} id="Vector_5" stroke="var(--stroke-0, #2390F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
          <path d={svgPaths.p3ba0700} id="Vector_6" stroke="var(--stroke-0, #2390F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55701" />
        </g>
      </svg>
    </div>
  );
}

function Span98() {
  return (
    <div className="absolute h-[18.684px] left-[39.7px] top-[14.01px] w-[77.419px]" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-[38.95px] not-italic text-[#2390f1] text-[14.01px] text-center top-[1.17px] tracking-[0.5981px] uppercase whitespace-nowrap">Rankings</p>
    </div>
  );
}

function Div1() {
  return <div className="absolute bg-[#2390f1] h-[2.336px] left-0 top-[44.37px] w-[131.135px]" data-name="div" />;
}

function Button17() {
  return (
    <div className="absolute h-[46.71px] left-0 top-0 w-[131.135px]" data-name="button">
      <Trophy />
      <Span98 />
      <Div1 />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[18.684px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6841 18.6841">
        <g id="Users">
          <path d={svgPaths.p716f600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d={svgPaths.pd882780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d={svgPaths.pdac8940} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d={svgPaths.p1e6e1000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
        </g>
      </svg>
    </div>
  );
}

function Span99() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-[33.97px] not-italic text-[14.01px] text-[rgba(255,255,255,0.45)] text-center top-[1.17px] tracking-[0.5981px] uppercase whitespace-nowrap">Tracker</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex gap-[7.007px] h-[46.71px] items-center left-[131.14px] px-[14.013px] top-0 w-[122.478px]" data-name="button">
      <Users />
      <Span99 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[18.684px]" data-name="User">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6841 18.6841">
        <g id="User">
          <path d={svgPaths.p13872040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d={svgPaths.p25a76a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
        </g>
      </svg>
    </div>
  );
}

function Span100() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-[12.59px] not-italic text-[14.01px] text-[rgba(255,255,255,0.45)] text-center top-[1.17px] tracking-[0.5981px] uppercase whitespace-nowrap">Bio</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex gap-[7.007px] h-[46.71px] items-center left-[253.61px] px-[14.013px] top-0 w-[79.49px]" data-name="button">
      <User />
      <Span100 />
    </div>
  );
}

function DollarSign() {
  return (
    <div className="relative shrink-0 size-[18.684px]" data-name="DollarSign">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6841 18.6841">
        <g id="DollarSign">
          <path d="M9.3421 1.55701V17.1271" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d={svgPaths.p2efd4d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
        </g>
      </svg>
    </div>
  );
}

function Span101() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-[18.74px] not-italic text-[14.01px] text-[rgba(255,255,255,0.45)] text-center top-[1.17px] tracking-[0.5981px] uppercase whitespace-nowrap">Bets</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex gap-[7.007px] h-[46.71px] items-center left-[333.1px] px-[14.013px] top-0 w-[91.678px]" data-name="button">
      <DollarSign />
      <Span101 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[18.684px]" data-name="BarChart2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6841 18.6841">
        <g id="BarChart2">
          <path d="M14.0131 15.5701V7.78504" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d="M9.34209 15.5701V3.11401" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
          <path d="M4.67106 15.5701V10.8991" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
        </g>
      </svg>
    </div>
  );
}

function Span102() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-[23.14px] not-italic text-[14.01px] text-[rgba(255,255,255,0.45)] text-center top-[1.17px] tracking-[0.5981px] uppercase whitespace-nowrap">Stats</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex gap-[7.007px] h-[46.71px] items-center left-[424.78px] px-[14.013px] top-0 w-[100.099px]" data-name="button">
      <BarChart />
      <Span102 />
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[18.684px]" data-name="Twitter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6841 18.6841">
        <g id="Twitter">
          <path d={svgPaths.p34210b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="1.55701" />
        </g>
      </svg>
    </div>
  );
}

function Span103() {
  return (
    <div className="flex-[1_0_0] h-[18.684px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18.684px] left-[32.8px] not-italic text-[14.01px] text-[rgba(255,255,255,0.45)] text-center top-[1.17px] tracking-[0.5981px] uppercase whitespace-nowrap">Twitter</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex gap-[7.007px] h-[46.71px] items-center left-[524.88px] px-[14.013px] top-0 w-[119.859px]" data-name="button">
      <Twitter />
      <Span103 />
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[46.71px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Button17 />
        <Button18 />
        <Button19 />
        <Button20 />
        <Button21 />
        <Button22 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#0a0e1a] content-stretch flex h-[47.878px] items-center left-[1.17px] pb-[1.168px] top-0 w-[419.224px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[1.168px] border-solid inset-0 pointer-events-none" />
      <Container56 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#0d1220] h-[745.028px] relative shrink-0 w-[420.392px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.06)] border-l-[1.168px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
        <Container55 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1265.848px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container1 />
        <Container21 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-[#0a0e1a] content-stretch flex flex-col h-[745.028px] items-start left-0 overflow-clip top-0 w-[1265.848px]" data-name="div">
      <Container />
    </div>
  );
}

function GrammarlyDesktopIntegration() {
  return <div className="absolute left-0 size-0 top-[745.03px]" data-name="Grammarly-desktop-integration" />;
}

function DesignNhlGameUi() {
  return (
    <div className="absolute bg-white h-[745.028px] left-0 top-0 w-[1063.657px]" data-name="Design NHL Game UI">
      <Div />
      <GrammarlyDesktopIntegration />
    </div>
  );
}

function IPadPro11InchScreenFrame() {
  return (
    <div className="absolute bg-[#d7dee8] inset-[37.49px] overflow-clip rounded-[40px]" data-name="iPad Pro 11-Inch Screen Frame">
      <div className="absolute h-[745.028px] left-0 top-0 w-[1063.657px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.01%] max-w-none top-0 w-[100.79%]" src={imgImage} />
        </div>
      </div>
      <DesignNhlGameUi />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#ffebf5] relative size-full" data-name="123">
      <div className="absolute h-[820px] left-[-148px] top-[98px] w-[1138.628px]" data-name="iPad Pro 11-Inch">
        <Device />
        <IPadPro11InchScreenFrame />
      </div>
    </div>
  );
}