import Link from "next/link";
import Image from "next/image";
import PaddedWrapper from "@/components/wrappers/PaddedWrapper";
import Heading2 from "@/components/typography/Heading2";
import Heading3 from "@/components/typography/Heading3";
import Heading4 from "@/components/typography/Heading4";
import VideoAnimation from "@/components/videos/VideoAnimation";
import { twMerge } from "tailwind-merge";
import BodyText from "@/components/typography/BodyText";
import Accordion from "./Accordion";

const imagePath = (img: string) => `/images/home${img}`;
export const benefitsCardData = [
  {
    title: "token",
    subtitle: "The Gateway token to the world of AI",
    image: imagePath("/benefits-token.webp"),
    content: `Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.`,
    isComingSoon: true,
  },
  {
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    image: imagePath("/benefits-revenue.webp"),
    content: `CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.`,
    isComingSoon: true,
  },
  {
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    image: imagePath("/benefits-launchpad.webp"),
    content: `The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
    isComingSoon: true,
  },
];

export const benefitsCardDataLG = [
  {
    title: "token",
    subtitle: "Empowering NFT Holders and Shaping AI Development",
    image: imagePath("/benefits-token-lg.webp"),
    content: `Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.`,
    isComingSoon: true,
  },
  {
    title: "income",
    subtitle: "Harnessing AI for Profit Generation",
    image: imagePath("/benefits-income-lg.webp"),
    content: `As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.`,
    isComingSoon: true,
  },
  {
    title: "launchpad",
    subtitle: "Unlocking Tokenized AI Projects",
    image: imagePath("/benefits-launchpad-lg.webp"),
    content: `AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
    isComingSoon: true,
  },
];

export const marketCardData = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    content: `The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.`,
    image: imagePath("/market-ai-prospects.webp"),
  },
  {
    title: "AI Tools and Market",
    content: `AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.`,
    image: imagePath("/market-ai-tools.webp"),
  },
  {
    title: "AI, Crypto, and NFT Market",
    content: `Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.`,
    image: imagePath("/market-ai-crypto.webp"),
  },
];

const VideoOverlay = () => {
  return (
    <div className="w-full h-full absolute top-0 bg-[linear-gradient(180deg,#3d8bff,#ab23ff)] mix-blend-soft-light rotate-180" />
  );
};

const BackgroundImage = () => {
  return (
    <div className="relative w-full flex-1">
      <VideoAnimation src="/videos/home/main-bg.mp4" />
      <Image
        src="/images/home/hero-video-blur.webp"
        alt=""
        fill
        className="bg-[linear-gradient(0deg,_rgba(5,12,26,1)_0%,_rgba(58,132,239,1)_40%,_rgba(176,32,255,1)_100%)] mix-blend-soft-light"
      />
    </div>
  );
};

export default function Home() {
  const transitionClasses =
    "transition-all ease-in-out duration-300 transform origin-top";
  return (
    <main className="flex w-full flex-1 flex-col">
      <section className="w-full flex min-h-[100dvh] relative">
        <BackgroundImage />
        <PaddedWrapper className="flex flex-col items-center w-full h-full absolute top-0">
          <div className="max-w-app-w w-full h-full flex flex-col justify-end xl:pb-[150px]">
            <div className="w-full flex flex-col gap-6 xl:gap-10">
              <Heading2 className="max-w-[1000px] xl:max-w-[1300px]">
                <span className="hidden xl:inline">
                  The world&apos;s first platform for Tokenizing AI blockchain
                  projects
                </span>
                <span className="xl:hidden">
                  Empowering AI-Crypto Innovations and Integrating AI Tools into
                  crypto.
                </span>
              </Heading2>
              <Heading4 className="flex flex-col gap-2 gradient text-gradient w-fit">
                <span className="w-full h-0.5 gradient" />
                <span className="hidden xl:inline">
                  Hold the Creon Pass NFT and earn passive income from AI Tools
                </span>
                <span className="xl:hidden">
                  Creon «Create On» confidential AI Tools for granting access
                  through NFTs.
                </span>
                <span className="w-full h-0.5 gradient" />
              </Heading4>
            </div>
          </div>
        </PaddedWrapper>
      </section>
      <section className="w-full flex min-h-[100vh] bg-black py-10">
        <PaddedWrapper className="w-full flex justify-center">
          <div className="w-full flex flex-col items-center md:flex-row gap-6 max-w-app-w">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <Heading2 className="border-b-[1px] border-b-tertiary py-6">
                creon pass nft
              </Heading2>
              <Heading4 className="gradient text-gradient">
                The Creon NFT pass unlocks access to AI projects, the Creon
                launchpad, and a ticket to generate passive income through
                AI-driven tools
              </Heading4>
              <div className="w-full md:hidden h-[485px] relative">
                <NFT />
              </div>
              <ContentVariant1 />
              <ContentVariant2 />
              <Link href="#" className="mt-10">
                <BodyText
                  className={`${transitionClasses} w-full md:w-[231px] xl:w-[453px] h-[46px] xl:h-[54px] rounded-md overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:to-primary`}
                >
                  <span
                    className={`${transitionClasses} w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
                  >
                    Buy Creon Pass
                  </span>
                  <span
                    className={`${transitionClasses} w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
                  >
                    Buy Creon Pass
                  </span>
                </BodyText>
              </Link>
            </div>
            <div className="w-full hidden md:flex flex-1 h-[694px] xl:h-[808px] md:w-1/2 relative rounded-md overflow-hidden">
              <NFT />
            </div>
          </div>
        </PaddedWrapper>
      </section>
      <section className="w-full flex min-h-[100vh] bg-black py-10">
        <PaddedWrapper className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col gap-4 max-w-app-w">
            <Heading2>Profiting Through</Heading2>
            <Heading3 className="gradient text-gradient text-right">
              AI Innovation & Decentralization
            </Heading3>
            <ContentXL />
            <ContentMD />
          </div>
        </PaddedWrapper>
      </section>
      <section className="w-full flex flex-col min-h-[100vh] bg-black py-10">
        <PaddedWrapper className="w-full h-full flex justify-center items-center">
          <div className="w-full flex flex-col lg:flex-row gap-0 md:gap-14 max-w-app-w z-10">
            <div className="w-full lg:w-1/2 flex flex-col">
              <Heading3 className="hidden xl:block max-w-[699px]">
                Our mission is to support the innovation of AI blockchain
                projects{" "}
                <span className="gradient text-gradient">
                  while prioritizing communities and democratizing profits
                </span>
              </Heading3>
              <Heading3 className="xl:hidden">
                our mission is to provide unique, confidential AI-based tools,
                to which you will gain{" "}
                <span className="gradient text-gradient">
                  lifetime access through NFT tokens and our CREON token.
                </span>
              </Heading3>
              <ImageBox
                wrapperClass="h-[182px] lg:h-[377px] xl:h-[502px] mt-[-40px] xl:mt-[-80px] md:hidden lg:block lg:overflow-visible"
                innerBoxClass="right-[calc(0vw-50px)] lg:right-[-180px] xl:right-[-250px]"
                imageContainer="w-[302px] h-[182px] lg:w-[628px] lg:h-[377px] xl:w-[836px] xl:h-[502px]"
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full max-w-[550px]">
                <Accordion />
              </div>
              <ImageBox
                wrapperClass="h-[377px] ml-[-20%] mt-auto mb-[-100px] hidden md:block lg:hidden"
                innerBoxClass="right-[calc(0vw-150px)]"
                imageContainer="w-[628px] h-[377px]"
              />
            </div>
          </div>
        </PaddedWrapper>
      </section>
      <section className="w-full flex min-h-[100vh] bg-black py-10 relative">
        <FooterBackground wrapperClass="xl:hidden " />
        <PaddedWrapper className="w-full flex justify-center items-center">
          <div className="w-full max-w-app-w z-0 pb-[100px] xl:pb-2">
            <div className="hidden xl:flex gap-6">
              {benefitsCardData.map((data, index) => (
                <BenefitsCard key={index} {...data} />
              ))}
            </div>
            <div className="xl:hidden w-[calc(100vw-30px)] md:w-[calc(100vw-65px)] overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 py-4">
                {benefitsCardDataLG.map((data, index) => (
                  <BenefitsCard key={index} {...data} />
                ))}
              </div>
            </div>
          </div>
        </PaddedWrapper>
      </section>
      <section className="w-full flex min-h-[100vh] relative bg-black">
        <FooterBackground wrapperClass="hidden xl:block" />
        <PaddedWrapper className="flex flex-col justify-center items-center w-full z-0">
          <div className="w-[calc(100vw-30px)] md:w-full max-w-app-w overflow-x-auto scrollbar-hide xl:pb-[150px]">
            <div className="w-full flex md:flex-col gap-4 xl:gap-6">
              {marketCardData.map((data, index) => (
                <MarketCard key={index} {...data} />
              ))}
            </div>
          </div>
        </PaddedWrapper>
      </section>
    </main>
  );
}

type ContentTextProps = React.PropsWithChildren & {
  className?: string;
};

const ContentText = ({ children, className = "" }: ContentTextProps) => {
  return (
    <BodyText
      className={twMerge(
        "px-4 py-2 border-[1px] border-tertiary w-fit rounded-md",
        className
      )}
    >
      {children}
    </BodyText>
  );
};

const ContentVariant1 = () => {
  return (
    <div className="hidden xl:flex flex-col gap-4">
      <ContentText>
        Pre-launch investment opportunities for upcoming AI projects
      </ContentText>
      <ContentText>
        Free and early access to Creon built AI projects
      </ContentText>
      <ContentText>
        Higher allocation limits on the Creon AI Launchpad
      </ContentText>
      <ContentText>
        Revenue share distribution from Creon built AI projects
      </ContentText>
    </div>
  );
};

const ContentVariant2 = () => {
  return (
    <div className="xl:hidden flex flex-col gap-4">
      <ContentText>
        Prospect to derive financial benefits through the redistributed profit
        generated from AI tools, but only when the majority of NFT holders
        decide to release the tool publicly.
      </ContentText>
      <div className="flex gap-4">
        <ContentText>
          The possibility of allocating investments into new, exceptional
          tokenized AI tools through Creon Launchpad.
        </ContentText>
        <ContentText>
          Early access to allocations in inspiring tokenized projects, real
          businesses based on AI.
        </ContentText>
      </div>
    </div>
  );
};

const NFT = () => {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <VideoAnimation
          src="/videos/home/NFT.mp4"
          className="mix-blend-soft opacity-80"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[13%] filter blur-[12px] xl:blur-[18px]  bg-black shrink-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300%] h-[13%] filter blur-[12px] xl:blur-[18px] bg-black shrink-0" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13%] h-[300%] filter blur-[12px] bg-black shrink-0" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[13%] h-[300%] filter blur-[12px] bg-black shrink-0" />
      </div>
      <VideoOverlay />
    </>
  );
};

const ContentXL = () => {
  return (
    <div className="hidden xl:flex w-full gap-10 py-6">
      <div className="w-2/3 relative rounded-md overflow-hidden">
        <VideoAnimation src="/videos/home/profit-video.mp4" />
        <VideoOverlay />
      </div>
      <div className="w-1/3 flex flex-col gap-4 items-center justify-center py-2 px-6 border-l-[1px] border-r-[1px] border-tertiary">
        <Heading4>
          The dynamic community driven business model of the future.
        </Heading4>
        <BodyText>
          At Creon, we blend the power of AI tools with the dynamic crypto and
          NFT markets, utilizing an innovative business model to drive
          profitability. This approach empowers our community, as our NFT and
          token holders directly benefit from the growth and prosperity of the
          Creon network, creating a win-win scenario for both our community and
          for the projects we launch.
        </BodyText>
      </div>
    </div>
  );
};

const ContentMD = () => {
  return (
    <div className="xl:hidden flex flex-col lg:flex-row w-full gap-8 py-6">
      <div className="w-full lg:w-3/5 h-[176px] sm:h-[262px] md:h-[362px] lg:h-[493px] relative rounded-md overflow-hidden">
        <VideoAnimation src="/videos/home/profit-video.mp4" />
      </div>
      <div className="w-full lg:w-2/5 flex flex-col gap-4 items-center justify-center py-6 lg:px-6 border-tertiary border-b-[1px] border-t-[1px] lg:border-t-0 lg:border-b-0 lg:border-l-[1px] lg:border-r-[1px]">
        <Heading4 className="text-left w-full">
          A Dynamic Business Model for Sustainable Growth and Community
          Engagement
        </Heading4>
        <BodyText>
          At Creon, we merge AI tools with the crypto and NFT markets,
          leveraging a dynamic business model to generate profits. Our
          commitment to innovation and decentralization allows us to strengthen
          our market position and foster a sustainable ecosystem. We empower our
          community, ensuring transparency and actively involving NFT holders in
          our success.
        </BodyText>
      </div>
    </div>
  );
};

type ImageBoxProps = {
  wrapperClass?: string;
  innerBoxClass?: string;
  imageContainer?: string;
};

const ImageBox = ({
  wrapperClass = "",
  innerBoxClass = "",
  imageContainer = "",
}: ImageBoxProps) => {
  return (
    <div
      className={twMerge(
        "w-full z-[-1] overflow-hidden relative",
        wrapperClass
      )}
    >
      <div className={twMerge("absolute ", innerBoxClass)}>
        <div className={twMerge("relative", imageContainer)}>
          <Image
            src={"/images/home/our-mission.webp"}
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

type BenefitsCardProps = {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  isComingSoon?: boolean;
};

const BenefitsCard = ({
  title,
  subtitle,
  image,
  content,
  isComingSoon,
}: BenefitsCardProps) => {
  const transitionClasses = "transform transition-all ease-in duration-200";

  return (
    <div className="w-full min-w-[308px] flex flex-col gap-3 xl:gap-6 bg-tertiary rounded-md h-[616px] xl:h-[659px] py-[20px] xl:py-[30px] relative">
      {isComingSoon ? (
        <span className="px-[6px] py-[3px] rounded-full text-xs leading-[13.2px] font-satoshi-bold uppercase bg-white absolute right-[5%] top-[-10px]">
          Coming soon
        </span>
      ) : (
        ""
      )}
      <div className="w-full flex flex-col gap-2 xl:gap-4 px-[30px] min-h-[90px] xl:min-h-[120px]">
        <Heading3>{title}</Heading3>
        <Heading4 className="gradient text-gradient">{subtitle}</Heading4>
      </div>
      <div className="w-full pr-[20px] xl:pr-[30px]">
        <div className="overflow-hidden rounded-e-md h-[234px]">
          <div
            className={`${transitionClasses} relative w-full h-full hover:scale-[1.1]`}
          >
            <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <BodyText className="px-[20px] xl:px-[30px]">{content}</BodyText>
    </div>
  );
};

type FooterBackgroundProps = {
  wrapperClass?: string;
};

const FooterBackground = ({ wrapperClass = "" }: FooterBackgroundProps) => {
  return (
    <div className={twMerge("h-full w-full absolute top-0", wrapperClass)}>
      <div className="w-full h-full absolute top-0 bg-[linear-gradient(180deg,#3d8bff,#ab23ff)] mix-blend-soft-light rotate-180" />
      <VideoAnimation src="/videos/home/footer-video.mp4" />
      <Image src="/images/home/footer-video-blur.webp" alt="" fill />
    </div>
  );
};

type MarketCardProps = {
  title: string;
  content: string;
  image: string;
};

const MarketCard = ({ title, content, image }: MarketCardProps) => {
  return (
    <div className="min-w-[292px] md:w-full min-h-[645px] md:min-h-[302px] flex flex-col-reverse md:flex-row gap-4 justify-end bg-tertiary rounded-md overflow-hidden">
      <div className="w-full md:w-2/3 xl:w-[70%] flex flex-col gap-4 p-6 md:justify-center md:items-center">
        <Heading3 className="w-full">{title}</Heading3>
        <BodyText>{content}</BodyText>
      </div>
      <div className="relative w-full md:w-1/3 xl:w-[30%] h-[160px] md:h-auto">
        <Image
          src={image}
          fill
          alt=""
          style={{ objectFit: "cover" }}
          className="grayscale"
        />
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(0deg,#3d6fff,#9123ff_99.28%)] mix-blend-overlay" />
      </div>
    </div>
  );
};
