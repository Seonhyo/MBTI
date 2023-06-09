import { IQuestion } from "./types";

export const QuestionData: IQuestion[] = [
    {
        Id:1,
        title: "새로운 고양이를 데려왔다! 나의 반응은?",
        answera: "뭐해? 이름은 뭐라고 지어줄까? 자꾸 말을 걸고 싶다.",
        answerb: "혼자만의 시간이 필요하지? 적응할 시간을 준다.",
        type: "EI",
    },
    {
        Id:2,
        title: "고양이에 대한 모든 것이 궁금해졌다. 나의 행동은?",
        answera: "고양이 관련 커뮤니티에 들어 다른 집사님들과 소통을 하며 고양이에 대한 지식을 쌓는다.",
        answerb: "커뮤니티에 가입은 하지만 눈으로 참고만 하고 혼자 찾아보는게 편하다.",
        type: "EI",
    },
    {
        Id:3,
        title: "아무리 봐도 우리 고양이가 정말 미묘인것 같다. 나의 행동은?",
        answera: "사람들한테 자랑해야지..! 하며 인스타를 만들어서 사진도 공유하고 소통도 한다.",
        answerb: "사진찍어서 사진첩에 간직한다.",
        type: "EI",
    },
    {
        Id:4,
        title: "고양이 유튜브를 시작하려고 한다. 나는 어떤 유튜브를 만들고 싶은가?",
        answera: "다른 유튜버들을 가이드 라인 삼아 비슷하게 만든다.",
        answerb: "새롭거나 자유로운 방식으로 만들기 위해 생각한다.",
        type: "SN",
    },
    {
        Id:5,
        title: "고양이에 대해서 모르는 부분들을 검색을 하고 있다. 내가 글을 읽는 방법은?",
        answera: "꼼꼼하고 정확하게 읽는다.",
        answerb: "전체적인 의미를 파악하며 읽는다.",
        type: "SN",
    },
];