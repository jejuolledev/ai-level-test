// main.js

// ============================================
// 데이터: 레벨 테스트 질문
// ============================================
const levelQuestions = [
    {
        text: "일상이나 업무에서 ChatGPT 같은 AI를 얼마나 자주 사용하나요?",
        options: [
            { text: "거의 사용 안 해요", score: 1 },
            { text: "가끔 궁금할 때만 써봐요", score: 2 },
            { text: "주 2~3회 정도 활용해요", score: 3 },
            { text: "거의 매일 쓰고 있어요", score: 4 }
        ]
    },
    {
        text: "AI에게 질문할 때, 어떤 방식으로 물어보시나요?",
        options: [
            { text: "그냥 떠오르는 대로 짧게 질문해요", score: 1 },
            { text: "구체적으로 물어보려고 노력해요", score: 2 },
            { text: "원하는 답을 얻기 위해 질문을 다듬어요", score: 3 },
            { text: "프롬프트 기법을 활용해 최적화해요", score: 4 }
        ]
    },
    {
        text: "AI가 잘못된 정보를 줄 수 있다는 걸 알고 계신가요?",
        options: [
            { text: "아니요, 처음 들어봐요", score: 1 },
            { text: "들어는 봤는데 잘 모르겠어요", score: 2 },
            { text: "알고 있고, 중요한 건 확인해요", score: 3 },
            { text: "항상 염두에 두고 검증해요", score: 4 }
        ]
    },
    {
        text: "AI를 사용할 때 개인정보나 민감한 데이터를 입력하는 것에 대해 어떻게 생각하세요?",
        options: [
            { text: "특별히 신경 쓴 적 없어요", score: 1 },
            { text: "위험할 수도 있다고 들었어요", score: 2 },
            { text: "민감한 정보는 피하려고 해요", score: 3 },
            { text: "철저히 걸러서 입력해요", score: 4 }
        ]
    },
    {
        text: "AI가 만든 콘텐츠(글, 이미지 등)의 저작권에 대해 알고 계신가요?",
        options: [
            { text: "생각해본 적 없어요", score: 1 },
            { text: "애매하다는 건 들었어요", score: 2 },
            { text: "어느 정도 이해하고 있어요", score: 3 },
            { text: "법적 이슈를 파악하고 있어요", score: 4 }
        ]
    },
    {
        text: "내 일이나 학업에서 AI를 어떻게 활용하고 있나요?",
        options: [
            { text: "아직 어떻게 쓸지 잘 모르겠어요", score: 1 },
            { text: "간단한 질문이나 번역 정도요", score: 2 },
            { text: "문서 작성이나 아이디어 구상에 써요", score: 3 },
            { text: "업무 프로세스에 깊이 통합했어요", score: 4 }
        ]
    },
    {
        text: "AI 도구를 여러 개 비교해서 사용해보신 적 있나요?",
        options: [
            { text: "ChatGPT만 써봤어요", score: 1 },
            { text: "다른 것도 있다는 건 알아요", score: 2 },
            { text: "2~3가지 정도 써봤어요", score: 3 },
            { text: "상황에 맞춰 여러 도구를 활용해요", score: 4 }
        ]
    },
    {
        text: "AI와 함께 일하는 미래에 대해 얼마나 준비되어 있다고 생각하세요?",
        options: [
            { text: "아직 잘 모르겠어요", score: 1 },
            { text: "관심은 있는데 막막해요", score: 2 },
            { text: "조금씩 배워가고 있어요", score: 3 },
            { text: "적극적으로 대비하고 있어요", score: 4 }
        ]
    },
    {
        text: "AI에게 복잡한 작업을 시킬 때 어떻게 하시나요?",
        options: [
            { text: "한 번에 다 물어봐요", score: 1 },
            { text: "잘 안 되면 다시 물어봐요", score: 2 },
            { text: "단계별로 나눠서 요청해요", score: 3 },
            { text: "체계적인 프롬프트 전략을 써요", score: 4 }
        ]
    },
    {
        text: "AI가 창의적인 작업(글쓰기, 디자인 등)을 어느 정도 할 수 있다고 생각하세요?",
        options: [
            { text: "별로 못할 것 같아요", score: 1 },
            { text: "보조 정도는 가능할 것 같아요", score: 2 },
            { text: "꽤 잘하지만 한계가 있어요", score: 3 },
            { text: "활용법에 따라 수준급이에요", score: 4 }
        ]
    },
    {
        text: "내 직업이나 전공 분야에서 AI가 어떤 역할을 할지 생각해보신 적 있나요?",
        options: [
            { text: "생각해본 적 없어요", score: 1 },
            { text: "막연하게는 생각해봤어요", score: 2 },
            { text: "구체적으로 고민하고 있어요", score: 3 },
            { text: "이미 전략을 세우고 실행 중이에요", score: 4 }
        ]
    },
    {
        text: "AI 관련 뉴스나 트렌드를 얼마나 자주 접하시나요?",
        options: [
            { text: "거의 안 봐요", score: 1 },
            { text: "가끔 우연히 보게 돼요", score: 2 },
            { text: "관심 있는 건 찾아봐요", score: 3 },
            { text: "정기적으로 팔로우하고 있어요", score: 4 }
        ]
    }
];

// ============================================
// 데이터: 레벨 결과
// ============================================
const levelResults = [
    {
        level: "AI 뉴비",
        emoji: "🐣",
        minScore: 12,
        maxScore: 20,
        summary: "AI 세계에 첫발을 내딛은 당신을 환영해요!",
        habit: "아직 AI를 본격적으로 활용하진 않지만, 호기심이 생기기 시작했어요. 가끔 ChatGPT를 써보거나 뉴스에서 AI 이야기를 들으면 '신기하다'고 느끼는 단계예요.",
        strength: "선입견 없이 AI를 바라볼 수 있어요. 지금부터 제대로 배우면 빠르게 성장할 수 있는 잠재력이 있답니다!",
        missions: [
            "ChatGPT에 하루 한 번씩 일상적인 질문 던져보기",
            "AI가 뭔지, 어떻게 작동하는지 쉬운 영상 하나 찾아보기",
            "AI가 잘못된 답을 줄 수도 있다는 걸 기억하며 사용하기"
        ]
    },
    {
        level: "AI 입문자",
        emoji: "🌱",
        minScore: 21,
        maxScore: 30,
        summary: "AI의 기본을 알고, 조금씩 써보고 있어요!",
        habit: "주 1~2회 정도 AI를 활용하고 있고, 번역이나 간단한 질문에 자주 쓰는 편이에요. 하지만 아직 복잡한 작업이나 프롬프트 최적화는 어색한 단계예요.",
        strength: "AI에 대한 관심과 호기심이 있고, 실제로 써보며 배우고 있어요. 이미 남들보다 한발 앞서 있답니다!",
        missions: [
            "프롬프트를 구체적으로 작성하는 연습하기 (역할, 맥락, 원하는 결과 명시)",
            "AI의 한계와 환각(잘못된 정보)에 대해 더 깊이 이해하기",
            "내 일이나 학업에서 AI를 쓸 수 있는 한 가지 방법 찾아 실행하기"
        ]
    },
    {
        level: "AI 실전러",
        emoji: "💪",
        minScore: 31,
        maxScore: 40,
        summary: "이미 남들보다 한발 앞선 AI 활용러예요!",
        habit: "거의 매일 AI를 사용하며, 업무나 학업에 실질적으로 적용하고 있어요. 프롬프트를 다듬고, AI의 장단점을 이해하며 쓰고 있죠.",
        strength: "AI를 단순한 도구가 아니라 협업 파트너로 인식하고 있어요. 개인정보나 저작권 이슈도 어느 정도 인지하고 있고요!",
        missions: [
            "여러 AI 도구(Claude, Gemini, Perplexity 등)를 비교하며 사용해보기",
            "AI 자동화 도구(n8n, Zapier 등)나 API 활용법 알아보기",
            "내 분야에서 AI가 가져올 변화를 예측하고 대비 전략 세우기"
        ]
    },
    {
        level: "AI 마스터 후보",
        emoji: "🚀",
        minScore: 41,
        maxScore: 48,
        summary: "축하해요! AI를 수준급으로 다루고 있어요!",
        habit: "AI를 단순히 쓰는 게 아니라, 전략적으로 활용하고 있어요. 프롬프트 엔지니어링, 여러 도구 비교, 윤리적 고려사항까지 모두 챙기는 수준이죠.",
        strength: "AI 트렌드를 꾸준히 팔로우하고, 새로운 도구나 기법을 빠르게 습득해요. 주변 사람들에게 AI 활용법을 알려줄 수 있는 수준입니다!",
        missions: [
            "AI 관련 커뮤니티나 스터디에 참여해 인사이트 공유하기",
            "MCP, 벡터DB, RAG 같은 고급 개념 학습하기",
            "내 분야에서 AI를 혁신적으로 활용한 사례 만들어보기"
        ]
    }
];

// ============================================
// 데이터: AI 상식 퀴즈
// ============================================
const quizQuestions = [
    {
        text: "MCP(Model Context Protocol)는 무엇을 위한 프로토콜인가요?",
        options: [
            "AI 모델의 학습 속도를 높이는 기술",
            "AI가 외부 데이터와 도구에 접근할 수 있게 하는 표준 프로토콜",
            "AI 모델의 크기를 압축하는 방법",
            "AI 간의 대화를 중재하는 시스템"
        ],
        correctIndex: 1,
        explanation: "MCP는 AI 모델이 외부 시스템, 데이터베이스, API 등에 안전하게 접근할 수 있도록 하는 표준 프로토콜이에요. Claude를 비롯한 여러 AI가 이를 지원하기 시작했답니다!"
    },
    {
        text: "n8n은 어떤 도구인가요?",
        options: [
            "AI 모델을 학습시키는 플랫폼",
            "워크플로우 자동화 도구",
            "코드 에디터",
            "디자인 협업 툴"
        ],
        correctIndex: 1,
        explanation: "n8n은 노코드/로우코드 방식의 워크플로우 자동화 도구예요. 여러 앱과 서비스를 연결해서 반복 작업을 자동화할 수 있어요. AI API와도 연동이 가능하답니다!"
    },
    {
        text: "생성형 AI의 '환각(Hallucination)'이란?",
        options: [
            "AI가 사용자의 감정을 잘못 인식하는 현상",
            "AI가 사실이 아닌 정보를 그럴듯하게 생성하는 현상",
            "AI가 이미지를 왜곡해서 보여주는 버그",
            "AI 서버가 과부하될 때 나타나는 오류"
        ],
        correctIndex: 1,
        explanation: "환각은 AI가 학습 데이터에 없거나 사실이 아닌 정보를 마치 사실인 것처럼 자신 있게 생성하는 현상이에요. 그래서 중요한 정보는 반드시 검증해야 해요!"
    },
    {
        text: "프롬프트 엔지니어링에서 'Few-shot Learning'이란?",
        options: [
            "AI에게 짧은 문장만 입력하는 기법",
            "AI에게 몇 가지 예시를 제공해서 패턴을 학습시키는 방법",
            "AI 모델의 학습 시간을 줄이는 기술",
            "적은 데이터로 AI를 처음부터 학습시키는 방법"
        ],
        correctIndex: 1,
        explanation: "Few-shot Learning은 AI에게 2~3개의 예시를 보여주고, 그 패턴을 따라 답변하게 하는 프롬프트 기법이에요. 원하는 형식의 답변을 얻기에 아주 효과적이랍니다!"
    },
    {
        text: "AI API를 사용한다는 것은 무엇을 의미하나요?",
        options: [
            "AI 웹사이트에서 직접 채팅하는 것",
            "프로그램이나 앱에서 AI 기능을 코드로 호출하는 것",
            "AI 모델을 내 컴퓨터에 다운로드하는 것",
            "AI의 소스코드를 수정하는 것"
        ],
        correctIndex: 1,
        explanation: "AI API는 코드를 통해 AI 서비스를 호출할 수 있게 해주는 인터페이스예요. 이를 활용하면 내 앱이나 서비스에 AI 기능을 통합할 수 있답니다!"
    },
    {
        text: "벡터 데이터베이스(Vector DB)는 주로 무엇에 사용되나요?",
        options: [
            "숫자 데이터만 저장하는 DB",
            "의미적으로 유사한 정보를 빠르게 검색하기 위한 DB",
            "그래프를 그리기 위한 데이터 저장소",
            "AI 모델의 가중치를 저장하는 곳"
        ],
        correctIndex: 1,
        explanation: "벡터 DB는 텍스트나 이미지를 수치 벡터로 변환해서 저장하고, 의미가 유사한 데이터를 빠르게 찾을 수 있게 해줘요. AI 검색이나 추천 시스템에 많이 쓰인답니다!"
    },
    {
        text: "GPT에서 'Temperature' 파라미터는 무엇을 조절하나요?",
        options: [
            "AI의 응답 속도",
            "AI 응답의 창의성과 무작위성",
            "AI가 사용하는 메모리 크기",
            "AI의 정확도"
        ],
        correctIndex: 1,
        explanation: "Temperature는 AI 응답의 창의성을 조절하는 값이에요. 낮을수록(0에 가까울수록) 일관되고 예측 가능한 답변을, 높을수록(1에 가까울수록) 창의적이고 다양한 답변을 생성해요!"
    },
    {
        text: "RAG(Retrieval-Augmented Generation)란?",
        options: [
            "AI 모델의 크기를 줄이는 기술",
            "외부 문서를 검색해서 AI 답변에 활용하는 방법",
            "AI를 더 빠르게 학습시키는 알고리즘",
            "이미지 생성 AI의 한 종류"
        ],
        correctIndex: 1,
        explanation: "RAG는 AI가 답변하기 전에 관련 문서나 데이터를 먼저 검색해서 참고하는 기법이에요. 이를 통해 더 정확하고 최신의 정보를 제공할 수 있답니다!"
    },
    {
        text: "LangChain은 무엇을 위한 도구인가요?",
        options: [
            "번역 전문 AI 서비스",
            "LLM 애플리케이션 개발을 위한 프레임워크",
            "블록체인 기반 AI 플랫폼",
            "언어 학습 앱"
        ],
        correctIndex: 1,
        explanation: "LangChain은 LLM(대규모 언어 모델)을 활용한 애플리케이션을 쉽게 만들 수 있게 해주는 프레임워크예요. 여러 AI 도구와 데이터를 연결해서 복잡한 작업을 구현할 수 있어요!"
    },
    {
        text: "AI의 'Context Window'란?",
        options: [
            "AI가 화면에 표시할 수 있는 글자 수",
            "AI가 한 번에 기억하고 처리할 수 있는 텍스트 범위",
            "AI 학습에 사용된 데이터의 시간 범위",
            "AI가 답변을 생성하는 데 걸리는 시간"
        ],
        correctIndex: 1,
        explanation: "Context Window는 AI가 한 번에 입력받고 처리할 수 있는 텍스트의 최대 길이예요. 이 범위를 넘어서면 이전 내용을 '잊어버리게' 된답니다!"
    },
    {
        text: "오픈소스 LLM의 장점이 아닌 것은?",
        options: [
            "코드를 직접 확인하고 수정할 수 있다",
            "상업적 AI보다 항상 성능이 뛰어나다",
            "내 서버에서 직접 운영할 수 있다",
            "커스터마이징이 자유롭다"
        ],
        correctIndex: 1,
        explanation: "오픈소스 LLM은 투명성과 커스터마이징이 장점이지만, 성능은 모델마다 다르고 상업적 AI(GPT-4, Claude 등)보다 떨어질 수 있어요. 하지만 특정 용도에선 충분히 효과적이에요!"
    },
    {
        text: "AI 에이전트(Agent)란 무엇인가요?",
        options: [
            "AI 모델을 판매하는 영업 직원",
            "스스로 계획을 세우고 도구를 사용해 작업을 수행하는 AI",
            "AI를 학습시키는 데이터 라벨러",
            "AI 서버를 관리하는 프로그램"
        ],
        correctIndex: 1,
        explanation: "AI 에이전트는 단순히 질문에 답하는 것을 넘어, 목표를 이해하고 계획을 세우며 필요한 도구(검색, 계산기, API 등)를 스스로 선택해서 사용하는 고급 AI 시스템이에요!"
    }
];

// ============================================
// 상태 관리
// ============================================
let currentQuestionIndex = 0;
let userAnswers = [];
let quizAnswers = [];
let quizRevealed = [];

// ============================================
// 초기화
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});

function initializeEventListeners() {
    // 히어로 섹션 - 테스트 시작 버튼
    document.getElementById('startTestBtn').addEventListener('click', startLevelTest);

    // 히어로 섹션 - AI 상식 퀴즈 바로 시작 버튼
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', showQuizSection);
    }
    
    // 레벨 테스트 - 이전/다음 버튼
    document.getElementById('prevBtn').addEventListener('click', goToPreviousQuestion);
    document.getElementById('nextBtn').addEventListener('click', goToNextQuestion);
    
    // 결과 - 다시 테스트하기, 퀴즈 버튼
    document.getElementById('retestBtn').addEventListener('click', resetTest);
    document.getElementById('quizBtn').addEventListener('click', showQuizSection);
    
    // 퀴즈 - 제출 및 재시도 버튼
    document.getElementById('quizSubmitBtn').addEventListener('click', submitQuiz);
    document.getElementById('quizRetryBtn').addEventListener('click', resetQuiz);
}

// ============================================
// 레벨 테스트 관련 함수
// ============================================

function startLevelTest() {
    // 초기화
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 섹션 표시/숨김
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz').classList.add('hidden');
    
    document.getElementById('levelTest').classList.remove('hidden');
    
    // 첫 질문 렌더링
    renderQuestion();
    
    // 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
    const question = levelQuestions[currentQuestionIndex];
    const totalQuestions = levelQuestions.length;
    
    // 진행률 업데이트
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
    
    // 질문 텍스트
    document.getElementById('questionText').textContent = question.text;
    
    // 선택지 렌더링
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.dataset.index = index;
        
        // 이미 선택한 답이 있으면 표시
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    // 버튼 상태 업데이트
    updateNavigationButtons();
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    // 모든 버튼에서 selected 클래스 제거
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 선택한 버튼에 selected 클래스 추가
    document.querySelector(`.option-button[data-index="${index}"]`).classList.add('selected');
    
    // 다음 버튼 활성화
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 이전 버튼 (첫 질문이 아닐 때만 활성화)
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 다음 버튼 (답을 선택했을 때만 활성화)
    nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
    
    // 마지막 질문이면 버튼 텍스트 변경
    if (currentQuestionIndex === levelQuestions.length - 1) {
        nextBtn.textContent = '결과 보기';
    } else {
        nextBtn.textContent = '다음 질문';
    }
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < levelQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // 마지막 질문 - 결과 계산 및 표시
        showResult();
    }
}

function showResult() {
    // 총점 계산
    let totalScore = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
        const question = levelQuestions[questionIndex];
        totalScore += question.options[answerIndex].score;
    });
    
    // 레벨 결정
    const result = levelResults.find(level => 
        totalScore >= level.minScore && totalScore <= level.maxScore
    );
    
    // 결과 화면 렌더링
    document.getElementById('resultEmoji').textContent = result.emoji;
    document.getElementById('resultLevel').textContent = result.level;
    document.getElementById('resultSummary').textContent = result.summary;
    document.getElementById('resultHabit').textContent = result.habit;
    document.getElementById('resultStrength').textContent = result.strength;
    
    const missionsContainer = document.getElementById('resultMissions');
    missionsContainer.innerHTML = '';
    result.missions.forEach(mission => {
        const li = document.createElement('li');
        li.textContent = mission;
        missionsContainer.appendChild(li);
    });
    
    // 섹션 표시/숨김
    document.getElementById('levelTest').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    
    document.getElementById('result').classList.add('hidden');
    document.getElementById('hero').classList.remove('hidden');
    document.getElementById('intro').classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// 퀴즈 관련 함수
// ============================================

function showQuizSection() {
    // 상단 섹션 숨기기
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('intro').classList.add('hidden');

    // 레벨 테스트/결과 숨기기
    document.getElementById('levelTest').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');

    // 퀴즈 섹션 보이게
    document.getElementById('quiz').classList.remove('hidden');

    // 퀴즈 초기화 + 스크롤
    resetQuiz();   // quizAnswers/quizRevealed 초기화 + 렌더 + scrollIntoView
}

function initializeQuiz() {
    quizAnswers = new Array(quizQuestions.length).fill(null);
    quizRevealed = new Array(quizQuestions.length).fill(false);
    
    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    
    quizQuestions.forEach((question, qIndex) => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        
        // 질문 헤더
        const header = document.createElement('div');
        header.className = 'quiz-question-header';
        
        const number = document.createElement('div');
        number.className = 'quiz-number';
        number.textContent = qIndex + 1;
        
        const questionText = document.createElement('div');
        questionText.className = 'quiz-question-text';
        questionText.textContent = question.text;
        
        header.appendChild(number);
        header.appendChild(questionText);
        card.appendChild(header);
        
        // 선택지
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quiz-options';
        
        question.options.forEach((option, oIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.dataset.qindex = qIndex;
            optionDiv.dataset.oindex = oIndex;
            
            if (quizAnswers[qIndex] === oIndex) {
                optionDiv.classList.add('selected');
            }
            
            // 정답 공개 시 색상 표시
            if (quizRevealed[qIndex]) {
                if (oIndex === question.correctIndex) {
                    optionDiv.classList.add('correct');
                } else if (quizAnswers[qIndex] === oIndex) {
                    optionDiv.classList.add('wrong');
                }
            }
            
            const label = document.createElement('div');
            label.className = 'option-label';
            label.textContent = oIndex + 1;
            
            const text = document.createElement('div');
            text.className = 'option-text';
            text.textContent = option;
            
            optionDiv.appendChild(label);
            optionDiv.appendChild(text);
            
            optionDiv.addEventListener('click', () => selectQuizOption(qIndex, oIndex));
            
            optionsDiv.appendChild(optionDiv);
        });
        
        card.appendChild(optionsDiv);
        
        // 정답 & 해설 토글 버튼
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'quiz-toggle-btn';
        toggleBtn.textContent = quizRevealed[qIndex] ? '해설 숨기기' : '정답 & 해설 보기';
        toggleBtn.addEventListener('click', () => toggleAnswer(qIndex));
        card.appendChild(toggleBtn);
        
        // 해설 영역
        if (quizRevealed[qIndex]) {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'quiz-answer';
            
            const answerLabel = document.createElement('div');
            answerLabel.className = 'quiz-answer-label';
            answerLabel.innerHTML = `✅ 정답: ${question.correctIndex + 1}번`;
            
            const explanation = document.createElement('div');
            explanation.className = 'quiz-explanation';
            explanation.textContent = question.explanation;
            
            answerDiv.appendChild(answerLabel);
            answerDiv.appendChild(explanation);
            card.appendChild(answerDiv);
        }
        
        container.appendChild(card);
    });
    
    // 제출 버튼 표시 여부
    const allAnswered = quizAnswers.every(answer => answer !== null);
    const submitBtn = document.getElementById('quizSubmitBtn');
    if (allAnswered) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
}

function selectQuizOption(qIndex, oIndex) {
    quizAnswers[qIndex] = oIndex;
    renderQuiz();
}

function toggleAnswer(qIndex) {
    quizRevealed[qIndex] = !quizRevealed[qIndex];
    renderQuiz();
}

function submitQuiz() {
    // 점수 계산
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
        if (quizAnswers[index] === question.correctIndex) {
            correctCount++;
        }
    });
    
    // 결과 표시
    document.getElementById('quizScore').textContent = correctCount;
    document.getElementById('quizTotal').textContent = quizQuestions.length;
    
    let comment = '';
    if (correctCount <= 3) {
        comment = '이제 막 AI 세계의 문을 두드리기 시작했어요. 조금씩 배워가다 보면 금방 전문가가 될 수 있어요!';
    } else if (correctCount <= 7) {
        comment = 'AI 상식, 꽤 준비되어 있네요! 이 정도면 주변 사람들에게 조언해줄 수 있는 수준이에요.';
    } else {
        comment = 'AI 덕후 인증 완료! 주변 사람들한테 강의해도 되겠어요. 정말 대단해요! 🎉';
    }
    
    document.getElementById('quizComment').textContent = comment;
    
    // 결과 카드 표시
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('quizSubmitBtn').classList.add('hidden');
    document.getElementById('quizResultContainer').classList.remove('hidden');
    
    // 스크롤
    document.getElementById('quizResultContainer').scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    quizAnswers = new Array(quizQuestions.length).fill(null);
    quizRevealed = new Array(quizQuestions.length).fill(false);
    
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('quizResultContainer').classList.add('hidden');
    document.getElementById('quizSubmitBtn').classList.add('hidden');
    
    renderQuiz();
    
    // 퀴즈 섹션 상단으로 스크롤
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}
