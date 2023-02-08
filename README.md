# Personality and Dogs !

## &#127828;서비스소개

<hr style="border: solid 1px black;">
<br>

**" 반려견을 키우려고 마음먹었을때, 당신의 성격과 맞춰보세요 "**

<br/><br/>

P&D 는 당신의 성격을 바탕으로 적절한 견종을 추천해드립니다.
현재 두가지의 성격 테스트가 가능합니다.

Number Test 와 DISC Test 를 통해 당신의 성격을 확인하세요.
확인된 성격을 바탕으로 적절한 반려견의 견종을 추천해드립니다!

<br><br>

**데모** : ...

<br><br>

## 사용된 기술

<hr style="border: solid 1px black;">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" style="border-radius:10px">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" style="border-radius:10px">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" style="border-radius:10px"> 
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" style="border-radius:10px">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" style="border-radius:10px">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" style="border-radius:10px">

#### 기타라이브러리 및 API

    Recharts 라이브러리(그래프)
    Dog CEO API (사진 및 정보)

<hr>

## ERD

<img src="/images/readme/ERD.png" style="width:500px"; style="height:400px";>

test-paper 의 정보를 받아와 내부 로직으로 결과ID(testId) 을 도출합니다.
결과 ID(testID) 를 바탕으로 test-result 의 정보를 받아와 사용합니다.

최종적으로 유저가 값을 저장하기를 원한다면 해당 result 에서 필요한 값만을 선택해, 날짜와 함께 저장합니다.

testResult 를 바탕으로 내부로직을 사용해 적절한 dog의 personality 를 도출합니다.

이후 dogs-data 에서 해당되는 값을 fetch 합니다.

<br>

## &#127828;주요 기능

<hr style="border: solid 1px black;">

### &#129372; 로그인 및 회원가입

<hr style="border: solid 1px black;">

Next-auth 라이브러리를 사용하여, 구글 OAuth 의 구현

<img src="/images/readme/1.JPG" style="width:500px"; style="height:400px";>
<img src="/images/readme/2.JPG" style="width:500px"; style="height:600px";>

<hr style="border: solid 1px black;">

### &#129372; 성격 테스트

현재 두개의 테스트 사용가능

1. NumberTest
2. DISC Test

- NumberTest
  실제 테스트는 아닙니다만, 재미로 하기 간단한 테스트 모델입니다.
  숫자에 따라 당신의 유형을 그저 재미로 나누어드립니다.
  맞으면 좋고 아니면 마세요!

<img src="/images/readme/4.JPG" style="width:500px"; style="height:400px";>
<img src="/images/readme/5.JPG" style="width:600px"; style="height:400px";>

- DISC Test
  1928년 미국 콜롬비아대학 심리학교수인 Willam Mouston Marston 박사가 고안한
  독자적인 행동유형모델로
  주도형, 사교형, 안정형, 신중형. 즉 DISC 행동유형으로 사람을 분류하는 방법입니다.
  10가지의 질문을 통해 유형점수를 나누고, 그에따라 결과값이 정해집니다.

<img src="/images/readme/8.JPG" style="width:500px"; style="height:350px";>
<img src="/images/readme/9.JPG" style="width:500px"; style="height:350px";>
<img src="/images/readme/10.JPG" style="width:500px"; style="height:350px";>

### &#129372; 테스트 결과 저장 및 반려견 매치 기능

테스트 결과를 알려드립니다.

그를 바탕으로

당신의 성격과 잘맞는 개와
당신의 성격을 보완해줄 수 있는 견종을 추천해줍니다.

크기는 여러분이 선택하세요!

<img src="/images/readme/6.JPG" style="width:500px"; style="height:350px";>

### &#129372; 테스트 결과 다시보기 기능

테스트 결과를 다시 볼 수 있습니다.

당신이 얼마나 변했는지 확인해보세요

잘못된 결과를 삭제 할 수 있습니다.

<img src="/images/readme/11.JPG" style="width:500px"; style="height:350px";>
<img src="/images/readme/12.JPG" style="width:500px"; style="height:380px";>

<hr/>

## 기타기능

심심하면 눌러보세요!

Dog CEO API 에서 온 98종의 견종을 확인하고
랜덤 페이지에서 강아지들의 사진이 랜덤으로 4개 나옵니다!

<img src="/images/readme/14.JPG" style="width:500px"; style="height:350px";>

<hr/>
