import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 똥을 싸시겠습니까?
          <br className="hidden lg:inline-block" />
          오늘도 넘버 투 쓰리 파이브 헌드레드?
        </h1>
        <p className="mb-8 leading-relaxed">
          실로 영락과 가는 피가 있을 우리의 충분히 얼음과 대한 말이다. 이것을
          것은 우리 사라지지 있는 불어 얼마나 되는 이것이다. 그림자는
          방황하였으며, 천하를 우리 공자는 우리의 황금시대다. 꽃이 보이는 그들은
          기쁘며, 이 그들의 끓는다. 갑 무엇을 것이 이상 든 인생에 곳이 사막이다.
          일월과 역사를 따뜻한 눈에 스며들어 보내는 발휘하기 피어나는 말이다.
          피가 두기 그들의 풀이 피는 되려니와, 간에 이상을 있다. 소금이라 천하를
          소리다.이것은 이 구하지 피가 풀이 위하여서. 것은 할지라도 이것을 있다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              똥이나싸러가자
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
