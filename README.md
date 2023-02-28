# Personality and Dogs !

## &#128054;서비스소개

<hr style="border: solid 1px black;">
<br>

**" 반려견을 키우려고 마음먹었을때, 당신의 성격과 맞춰보세요 "**

P&D 는 당신의 성격을 바탕으로 적절한 견종을 추천해드립니다.
현재 두가지의 성격 테스트가 가능합니다.

Number Test 와 DISC Test 를 통해 당신의 성격을 확인하세요.
확인된 성격을 바탕으로 적절한 반려견의 견종을 추천해드립니다!

**데모** : https://personality-and-dogs.vercel.app/

## &#127789;사용된 기술 

<hr style="border: solid 1px black;">
<p><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" style="border-radius:10px">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" style="border-radius:10px">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" style="border-radius:10px"> 
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" style="border-radius:10px">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" style="border-radius:10px">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" style="border-radius:10px"></p>

#### 기타라이브러리 및 API

    Recharts 라이브러리(그래프)
    Dog CEO API (사진 및 정보)

<hr>

### 주요 버전정보

```js
    
    react : v18.2.0
    nextjs : v14.1.6
    typescript : v4.9.5
    next-auth : v4.19.2
    mongodb : v5.0.0
    sass : v1.58.0
    rechart : v2.3.2

```

<hr>

## Database 설계

<p><img src="/public/images/readme/ERD.png" style="width:400px"; style="height:300px";></p>

test-paper 의 정보를 받아와 내부 로직으로 결과ID(testId) 을 도출합니다.<br>
결과 ID(testID) 를 바탕으로 test-result 의 정보를 받아와 사용합니다.

최종적으로 유저가 값을 저장하기를 원한다면 해당 result 에서 필요한 값만을 선택해, 날짜와 함께 저장합니다.

testResult 를 바탕으로 내부로직을 사용해 적절한 dog의 personality 를 도출합니다.

이후 dogs-data 에서 해당되는 값을 fetch 합니다.

<br>

<hr>

## 디렉토리 구조 설계

<br>

```
root
├─ public
└── src
    ├─ components      * 컴포넌트들이 들어있습니다.
    │ ├─ all-dogs
    │ ├─ cards
    │ ├─ dogs
    │ ├─ homepage
    │ ├─ signup
    │ ├─ layout
    │ ├─ modal
    │ ├─ my-test-results
    │ ├─ test-disc
    │ ├─ signup
    │ └─ test-number
    │
    ├─ pages          * pages 들이 들어있습니다.
    │ ├─ all-dogs
    │ ├─ api          * 서버와 통신하는 api 코드들이 들어있습니다.
    │ │   └─ auth     * next-auth 를 사용하기 위한, auth 코드가 들어있습ㅏ니다.
    │ ├─ test-disc    * disc test를 위한 page 가 들어있습니다.
    │ └─ test-number  * number test를 위한 page 가 들어있습니다.
    │
    ├─ helper         * 앱의 주요 로직 (현재는 강아지를 매치시키는 로직)이 들어있습니다.
    └─ styles         * global 스타일과, 공통되는 스타일을 @mixin 으로 설정해두었습니다

```

기본적인 pages 들에는 페이지의 기본이 되는 HEAD, 및 컴포넌트들이 들어있습니다.
또한 유저들이 접근할 수 없도록 막기 위한 redirect 로직 정도가 페이지 안에 들어있습니다.

componets 안에는 실제로 화면에 구현될 코드들이 들어있습니다.

helper 폴더 안에는 공통되는 기능 구현을 위한 로직들이 들어있습니다.
다만 널리 사용되는 기능 로직이 아니라, 특정 Test 에 해당되는 로직은,
컴포넌트 안의 test가 실행되는 파일안에 들어있습니다.

따라서, 현재는 강아지를 매치시키는 로직 하나만 들어있습니다.

<hr>

## 기능 설계와 기본 로직

<br>

#### 구현기능

1. 로그인과 회원가입 기능을 Oauth 로 구현합니다. 특히나 가장 널리 사용되는 GoogleOAuth 를 이용해봅니다.
2. 심리검사를 실시합니다.
3. 심리 검사의 결과를 DB에 저장, 삭제 할 수 있도록 합니다.
4. 심리검사에 따른 성격을 통해, 자체 로직을 구성하여 반려견을 매치시킵니다.
5. 반려견은 "일치" 되는 반려견과 내성격을 "보완" 해줄 반려견의 성격, 둘로 나눠 매치해줍니다.
6. 기타 반려견 사진 및 총 반려견의 종류를 보여줍니다.

<hr/>

#### 기본 로직

1. 심리검사
2. 검사후 결과보기버튼 을 누른다.
3. 결과보기버튼은 URL 에 "결과ID" 를 담아 동적페이지인 [Result] 페이지로 이동한다.

4. Result 페이지는 "동적페이지"로, URL 정보에 "결과ID" 를 담아, 쿼리로 받을 수 있다.
5. 쿼리로 받은 "결과ID" 를 통해, 결과가 담겨있는 "DB에 API 요청"을 통해 테스트결과를 가져온다.
6. 결과를 확인했다면, "저장 후 개 페이지로 이동" 버튼을 누를 수 있다. (로그인되어있다면)
7. 버튼을 누르면, DB에 결과값을 저장과 동시에 "로컬스토리지" 에 값이 저장되고, 개 페이지로 이동한다.

8. 개 페이지 에서는 로컬스토리지에 담긴, 유저의 TEST결과값을 토대로 개의 성격을 매치시켜준다.
9. 매치된 개들의 성격을 토대로, 그에 맞는 개들을 사이즈별로 분류해서 보여준다.
10. 이때, 개들의 사진은 "DOGS API" 라는 "외부 API"에 요청을 해, 가져온다.

<hr/>

### &#127775; 발전 사항

```
1. 설계의 중요성 인지
    어느정도 틀이 잡힌 설계후 코딩을 시작함으로써, 
    기존에 고질적인 문제였던 설계 실수로 인해 앱을 다시제작하는 실수 를 없앨 수 있었습니다.

2. 그래프를 통한 시각화
     그래프를 사용하여 더욱 나은 정보전달 기능을 추가할 수 있었습니다.

3. SSG 의 작동 방식 이해
     Next.js 는 SSG 방식으로 초기 구동을 하게 됩니다.
     앱이 동작하는 초기 window 객체를 불러오지 못하는 문제 등을 인지하고 작업함으로써
     이해하지 못하는 오류를 줄일 수 있었습니다.

4. 웹 표준을 고려
     Can i see 사이트를 이용하여 조금이나마 웹표준을 지키며, 많은 브라우저에서 불편함을 덜 
     공통적인 CSS 를 사용해보았습니다.

5. 더 향상된 DB Query 방법
     MongoDB 의 사용방법을 조금 더 익혀, 쿼리 조건을 자세히 설정해 
     필요한 부분만을 가져와, 메모리적인 측면에서 향상된 기능을 사용할 수 있게 되었습니다.

6. 디렉토리 구조의 설계
     이전에는 코드의 기능과 위치에 따라 디렉토리 구조를 설계하지 않아, 업데이트나 수정할때
     곤욕을 겪기 일수였습니다.
     이번 프로젝트에는 디렉토리 구조를 우선적으로 만들어 앱을 만듬으로써
     더 가독성 있는 코드를 만들 수 있게 되었습니다.

7. 다양한 저장기능 사용
    머리로만 인지하던 쿠키와 로컬스토리지, DB 의 목적을,
    실질적으로 생각하고 사용하여, 그 기능에 맞는 역할을 수행시키도록 노력했습니다.

```

<hr>

## &#127789;주요 기능과 코드

<hr style="border: solid 1px black;">

### 1. 로그인 및 회원가입

<hr style="border: solid 1px black;">

Next-auth 라이브러리를 사용하여, 구글 OAuth 의 구현합니다.

<p><img src="/public/images/readme/1.JPG" style="width:300px"; style="height:250px";>
<img src="/public/images/readme/2.JPG" style="width:300px"; style="height:350px";></p>

기본적인 Oauth 의 구현 방식입니다.

<p><img src="https://blog.kakaocdn.net/dn/bFH1BD/btr0uwLaEap/oKDLH0sDjZRcBjPWmkhOnk/img.png" style="width:600px"; style="height:500px";></p>

```js

1. 클라이언트는 Oauth 로 허가 코드를 요청합니다.
2. Oauth 는 허가 코드를  Redirect URI 를 통해 응답합니다.

    이때, 클라이언트는 Oauth 로 Oauth 를 사용하는 사이트에서 발급받은 "ID 혹은 PASSWORD, CREDIT 등을 넣습니다"
    대부분의 Oauth 는(네이버, 구글, 깃헙 등...) 디벨로퍼 탭에서 API 와 ID 등을 발급받을 수 있습니다.

3. 허가코드가 생긴 클라이언트는, 서버로 허가 코드를 전달하게 되고
4. 서버는 Oauth 로 허가 코드를 주고  접근 코드(Access Token)를 가져옵니다.
5. 서버는 클라이언트로 접근 코드를 응답합니다

```

```js

< layout-header.tsx>

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const LayoutHeader = () => {
    const { data } = useSession();
        ...

    return (
        ...
        {data === null ? (
            <>
              <p onClick={() => signIn("google", { callbackUrl: "/" })}>
                SignIn
              </p>
            </>

```

```js

< api / [...nextauth].ts >

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.SECRET!,
});


```

next-auth의 signIn 함수를 이용하면
클라이언트는 함수 실행시자동적으로 googleOAuth 에게
env 에 저장된 CliendID 와 Password 를 이용해 요청하게됩니다.
요청된 값이 REDIRECT URL 형태로 허가토큰을 가져오고,
해당 허가 토큰을 URL 에서 가져와, 구글 Oauth 에 접근 토큰을 요청합니다.
접근토큰은 JWT 의 형태로 클라이언트에게 돌아오게되고
next-auth 는 자동적으로 그것을 "쿠키" 에 저장, useSession 을 통해 불러옵니다.

<hr style="border: solid 1px black;">

### 2. 성격 테스트

<hr/>

현재 두개의 테스트가 준비되어있습니다.

    1. NumberTest
    2. DISC Test

<h3 align="center"> DISC TEST </h3>
  1928년 미국 콜롬비아대학 심리학교수인 Willam Mouston Marston 박사가 고안한
  독자적인 행동유형모델로
  주도형, 사교형, 안정형, 신중형. 즉 DISC 행동유형으로 사람을 분류하는 방법입니다.
  10가지의 질문을 통해 유형점수를 나누고, 그에따라 결과값이 정해집니다.
  
<br>

<p><img src="/public/images/readme/8.JPG" style="width:500px"; style="height:350px";>
<img src="/public/images/readme/9.JPG" style="width:500px"; style="height:350px";>
<img src="/public/images/readme/10.JPG" style="width:500px"; style="height:350px";></p>

<hr/>
구현 로직은 components 안의 test-number-testing.tsx 과 -result.tsx 안에 들어있습니다.

1. 컴포넌트에 진입하면, DB 에서 검사지를 가져옵니다.
2. 검사지를 눌러가면 자체 로직을 통해 검사 결과를 도출합니다.
3. 검사 결과를 그래프와 글 형태로 만들어 보여줍니다.
4. 유저는 저장 후 자신의 성격과 맞는 반려견을 매치키실 수 있습니다.

```js

<components / test-disc-testing.tsx >

const TestDiscTesting = () => {
    const [testPaper, setTestPaper] = useState<TestPaperType[]>(); // 질문지

    useEffect(() => {
    setPaperLoading(true);

    if (testPaper?.length !== 0) {

        (async () => {
            const testPaper = await fetch("/api/test-paper");   // 질문지 GET
            const testPaperData = await testPaper.json();
            setTestPaper(testPaperData.data);
            setPaperLoading(false);

    })() };
    }, []);

    // 정답값 넣는 로직
    const addHandler = (questionId: string, id: string) => {
        if (resultState.length === 4 * Number(id)) {
            setResultState((prev) => [...prev, questionId + id + 6]);
        } else if (resultState.length === 4 * Number(id) + 1) {
            setResultState((prev) => [...prev, questionId + id + 4]);
        } else if (resultState.length === 4 * Number(id) + 2) {
            setResultState((prev) => [...prev, questionId + id + 2]);
        } else if (resultState.length === 4 * Number(id) + 3) {
            setResultState((prev) => [...prev, questionId + id + 0]);
        }
    };
        ...

    // 최종 결과 생성 함수 (및 로컬스토리지에 저장 후 페이지이동)
    const submitHandler = () => {
        setLoading(true);
        const totalD: number = resultState
        .filter((result) => result.startsWith("c"))
        .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);
        const totalI: number = resultState
        .filter((result) => result.startsWith("b"))
        .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);
        const totalS: number = resultState
        .filter((result) => result.startsWith("a"))
        .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);
        const totalC: number = resultState
        .filter((result) => result.startsWith("d"))
        .reduce((acc, cur) => Number(acc) + Number(cur.slice(2, 3)), 0);

        const result = [
        { type: "d", data: totalD },
        { type: "i", data: totalI },
        { type: "s", data: totalS },
        { type: "c", data: totalC },
        ];

        window.localStorage.setItem("test-result-graph", JSON.stringify(result));

        const reArrange = result.sort((a, b): number => {
        return b.data - a.data;
        });

        router.push(`/test-disc/${reArrange[0].type}${reArrange[1].type}`);

        // 스토리지에 저장할 결과 => [{ type: "d", data: totalD }, { type: "i", data: totalI }, ... , ]
        // 동적 페이지로 이동할 결과 => [test-disc,di], [test-disc,"결과"] 페이지로 이동
    };

```

저장후 동적 페이지로 이동하게 됩니다.
동적페이지에서는 쿼리를 통해 그 값을 빼내 "결과지" 를 DB 에서 가져와 보여줍니다.

```js
<pages / test-disc / [result].tsx >

const DISCTestResult = (props: { result: string }) => {
  const { result } = props;

  return (
    <div>
      <Head>
        <title>P&D - DISC Test Result</title>
        <meta name="description" content="DISC test result" />
      </Head>
      <TestDiscResult result={result} />
    </div>
  );
};

```

```js

<components / test-disc-result.tsx , test-disc-graph.tsx  >


const TestDiscResult = (props: { result: string }) => {
  const { result } = props; // page 에서 넘어온, 유저의 테스트결과의 id값 (e.g. di, ds, ic 등...)
  const [mainTestResultData, setMainTestResultData] =useState<TestResultType>();
  const [subTestResultData, setSubTestResultData] = useState<TestResultType>();
        ...

  // 쿼리에서 온 결과값을 통해, DB 에서 데이터를 가져온다.
  useEffect(() => {
    (async () => {
      const main = await fetch("/api/test-result", {
        method: "POST",
        body: JSON.stringify({
          testType: "disc-test",
          testId: Array.from(result)[0], // 유저의 최종결과값중 메인결과값
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const sub = await fetch("/api/test-result", {
        method: "POST",
        body: JSON.stringify({
          testType: "disc-test",
          testId: Array.from(result)[1], // 유저의 최종 결과값중 서브결과값
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const mainData = await main.json();
      const subData = await sub.json();

      setMainTestResultData(mainData.data);
      setSubTestResultData(subData.data);
    })();
  }, []);

    // DOGS 페이지에서 사용할 수 있게, DB 에서 결과값이 나오면 자동으로 로컬스토리지에 넣는다.
  useEffect(() => {
    window.localStorage.setItem(
      "test-result",
      JSON.stringify(mainTestResultData)
    );
  }, [mainTestResultData]);

  // 저장후 DOGS 페이지로 이동 버튼을 누르면, DB에 결과값을 저장하고 DOGS 페이지로 넘어간다.
  const submitHandler = async () => {
    if (data === null) {
      signIn("google", { callbackUrl: "/" });
      return;
    }
    const userId = data?.user?.email;
    const testId = result;
    const testType = mainTestResultData?.testType;
    const testResult = mainTestResultData?.testResult;
    const date = new Date().toLocaleString("ko-KR");

    const response = await fetch("/api/user-test-data", {
      method: "POST",
      body: JSON.stringify({ userId, testId, testType, testResult, date }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return;
    } else {
      router.push("/dogs");
    }
  };

```

그래프 라이브러리를 통해, 그래프로 표현해주고 반려견 매치 페이지로 이동합니다.

로컬스토리지에 넣는 이유는, 유저의 새로고침에 의해 값이 사라지는것을 막기 위합입니다.

<br>
<br>

<h3 align="center"> Number TEST</h3>

<hr/>

<br>

<p>  실제 테스트는 아닙니다만, 재미로 하기 간단한 테스트 모델입니다.</p>

<p>  숫자에 따라 당신의 유형을 그저 재미로 나누어드립니다.</p>
<p>  맞으면 좋고 아니면 마세요!</p>

<br>

<p><img src="/public/images/readme/4.JPG" style="width:400px"; style="height:300px";>
<img src="/public/images/readme/5.JPG" style="width:500px"; style="height:350px";></p>

<hr/>

구현 로직은 components 안의 test-number-testing.tsx 과 -result.tsx 안에 들어있습니다.

앞선 로직과 동일합니다.

<br>
<br>

<hr/>

### 3. 테스트 결과 저장 및 반려견 매치 기능

<hr/>

테스트 결과를 알려드립니다.

해당 결과를 바탕으로

당신의 성격과 잘맞는 개와
당신의 성격을 보완해줄 수 있는 견종을 추천해줍니다.

크기는 여러분이 선택하세요!

<p><img src="/public/images/readme/6.JPG" style="width:500px"; style="height:350px";></p>

<hr/>

앞서 결과값이 오게되면, 그에 따른 성격값이 도출됩니다.
성격값과 유저가 선택한 SIZE 값을 이용해
해당 성격과 크기를 가진 "개 데이터" 를 DB에서 가져옵니다.
이후 DogsCard 컴포넌트를 가져와 화면에 표시합니다.

이때, "개 데이터" 의 크기가 매우 크므로, useCallback Hook 을 사용하여,
최적화를 진행합니다.

```js

<components / dogs / digs-match.tsx >

const DogsMatch = () => {
  let dogsPesonality; // match 된 dogs 의 dogsPesonality
  const [fitMatchDogsDatas, setFitMatchDogsDatas] = useState<DogsDataType[]>();
  const [balanceMatchDogsDatas, setBalanceMatchDogsDatas] = useState<DogsDataType[]>();
  const [size, setSize] = useState<string>("");
  const [testResultData, setTestResultData] = useState<TestResultType>({
    _id: "",
    testId: "",
    testType: "",
    testResult: "",
    testDescription: "",
  });

  useEffect(() => {
    const testResult = JSON.parse(window.localStorage.getItem("test-result")!); // 로컬스토리지 값 가져와서 State로
    setTestResultData(testResult);
  }, []);

  if (testResultData._id !== "") {
    dogsPesonality = matchPersonality(testResultData!.testResult); // 개의 성격 match [배열이기에, 원본변형 가능]
  }

  const fitArray = dogsPesonality?.fit!.split(","); // fit 한 dogs 들 배열로 변경
  const balanceArray = dogsPesonality?.balance?.split(","); // balance 한 dogs 들 배열로 변경

  // DB 에서 dog Data get하는 함수 [fit dogs 와 balance dogs]
  const getDogsDataHanlder = useCallback(async () => {
    const fitDogs = await fetch("/api/dogs", {
      method: "POST",
      body: JSON.stringify({ personality: fitArray, size: size }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fitdogsData = await fitDogs.json();

    const balanceDogs = await fetch("/api/dogs", {
      method: "POST",
      body: JSON.stringify({ personality: balanceArray, size: size }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const balanceDogsData = await balanceDogs.json();

    setFitMatchDogsDatas(fitdogsData.data);
    setBalanceMatchDogsDatas(balanceDogsData.data);
  }, [size]);

  useEffect(() => {
    // 버튼에 의해 size 가 등록되어, size 가 있다면 함수실행
    if (size !== "") {
      getDogsDataHanlder();
    }
  }, [size]); // 의존성배열

  // State 값 화면에 보일 JSX 코드로 변환
  const fitDogsList = fitMatchDogsDatas?.map((dogs) => (
    <DogCard
      key={dogs._id}
      name={dogs.name}
      personality={dogs.personality}
      size={dogs.size}
    />
  ));

  const balanceDogsList = balanceMatchDogsDatas?.map((dogs) => (
    <DogCard
      key={dogs._id}
      name={dogs.name}
      personality={dogs.personality}
      size={dogs.size}
    />
  ));

  return (
        ...


```

<hr/>
<br>
<br>

### 4. 테스트 결과 다시보기 기능

<hr/>

테스트 결과를 다시 볼 수 있습니다.

당신이 얼마나 변했는지 확인해보세요

잘못된 결과를 삭제 할 수 있습니다.

<p><img src="/public/images/readme/11.JPG" style="width:500px"; style="height:350px";>
<img src="/public/images/readme/12.JPG" style="width:500px"; style="height:380px";></p>

<hr/>

드롭다운 형태로 유저는 자신의 테스트 결과를 볼 수 있고,
테스트 결과를 삭제할 수 있습니다.

```js

<components / my-test-results / my-test-result.tsx >


const MyTestResults = (props: { userId: string | null | undefined }) => {
  const { userId } = props;
  const [userResultData, setUserResultData] = useState<UserTestType[]>();
  const [dropDownId, setDropdownId] = useState<string>();

  const dropDownToggle = (id: string) => {
    setDropdownId(id);
  };
  const hideDropDown = () => {
    setDropdownId("");
  };

    // DELETE handler 입니다.
  const deleteResult = async (_id: string) => {
    await fetch("/api/get-user-test-data", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUserResultData((prev) => prev?.filter((item) => item._id !== _id));
  };

    // 초기 유저데이터를 가져옵니다.
  useEffect(() => {
    (async () => {
      const userData = await fetch("/api/get-user-test-data", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resultData = await userData.json();

      setUserResultData(resultData.data);
    })();
  }, [userId]);



```

<hr/>

<br>
<br>

## 5.기타기능

<hr/>

심심하면 눌러보세요!

Dog CEO API 에서 온 98종의 견종을 확인하고
랜덤 페이지에서 강아지들의 사진이 랜덤으로 4개 나옵니다!

<p><img src="/public/images/readme/13.JPG" style="width:500px"; style="height:350px";></p>

<hr/>

## &#127789; NEXT.JS 의 사용이유와 Vercel 배포

<hr style="border: solid 1px black;">

NEXT.JS 는 초기 접속시에만 SSR 방식으로 렌더링된 HTML 을 만들어 보내주고
이후에는 CSR 형식으로 클라이언트 사이드에서 라우팅을 처리합니다.

따라서 SEO 에 유리한 SSR 을 가지고 있으면서도,
내부적으로 CSR 처럼 동작하기에 매우 빠른 반응속도를 얻을 수 있다는 장점이 있습니다.

또한 Pre-Render 를 할때 SSG 를 사용하여, 미리 만들어둔 HTML 문서를 재활용 할 수 있으므로
SSR 방식임에도 초기반응이 빠르다는 장점을 가지고 있습니다.

이번 동적페이지의 Pre-Render 시 SSG 를 사용하여 빠른 초기속도와 더 나은 SEO 를 구현하도록
NEXT.JS 를 사용해보았습니다.

배포는 VERCEL 를 사용하여 진행했습니다.

Vercel 은 SERVERLESS 로 동작하는 배포 방식을 가지고 있습니다.

서버를 직접 관리할 필요가 없어, 동작 코드에 집중할 수 있게 도와주었습니다.

Github와 기타 다른 배포보다 더 빠르며, webpack 을 사용한 React 를 배포시

배포를 자동화 시켜주는 장점을 가지고 있습니다. 
