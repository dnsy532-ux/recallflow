/**
 * RecallFlow - Spaced Repetition (SM-2) Desktop Flashcard System
 * Clean Blue & White Edition with 20-Question Session Batches
 */

// --- Session Batch Configuration ---
const SESSION_BATCH_LIMIT = 20; // 1回のセッションは最大20問固定

// --- Default Preset Data ---
const PRESET_DECKS = [
  {
    id: "deck_toeic",
    title: "TOEIC & 実践ビジネス英語",
    description: "頻出のビジネスイディオムと表現。音声読み上げ対応。",
    created_at: new Date().toISOString(),
    cards: [
      {
        id: "c_toeic_1",
        front: "feasible",
        back: "実行可能な、実現可能な",
        note: "It is technically feasible to implement this within two weeks.",
        tags: ["ビジネス", "頻出"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_2",
        front: "streamline",
        back: "合理化する、効率化する",
        note: "We need to streamline our operational processes to reduce costs.",
        tags: ["ビジネス", "経営"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_3",
        front: "leverage",
        back: "〜を活用する、てことして利用する",
        note: "We can leverage our existing customer base to expand the new service.",
        tags: ["ビジネス", "動詞"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_4",
        front: "discrepancy",
        back: "相違、食い違い、不一致",
        note: "There is a minor discrepancy between the invoice and the estimate.",
        tags: ["名詞", "経理"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_5",
        front: "benchmark",
        back: "基準、指標、比較評価する",
        note: "Our performance serves as a benchmark for competitors in the market.",
        tags: ["ビジネス", "指標"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_6",
        front: "mandatory",
        back: "義務的な、強制的な、必須の",
        note: "Attendance at the annual compliance training is mandatory for all staff.",
        tags: ["形容詞", "頻出"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_7",
        front: "alleviate",
        back: "（苦痛・負担を）軽減する、緩和する",
        note: "The new bypass road will alleviate heavy traffic congestion in the city.",
        tags: ["動詞", "重要"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_toeic_8",
        front: "preliminary",
        back: "予備の、事前の、準備の",
        note: "The preliminary findings indicate a significant increase in user engagement.",
        tags: ["形容詞", "ビジネス"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      }
    ]
  },
  {
    id: "deck_it_exam",
    title: "ITパスポート・基本情報技術者 Key用語",
    description: "コンピュータ基礎・セキュリティ・ネットワークの重要用語集。",
    created_at: new Date().toISOString(),
    cards: [
      {
        id: "c_it_1",
        front: "公開鍵暗号方式 (Public-key Cryptography)",
        back: "暗号化鍵と復号鍵が異なる暗号方式",
        note: "誰でも暗号化できる公開鍵と、受信者だけが持つ秘密鍵をペアで用いる（RSAなど）。",
        tags: ["セキュリティ", "暗号"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_it_2",
        front: "キャッシュメモリ (Cache Memory)",
        back: "CPUと主記憶（RAM）の速度差を埋める高速小容量メモリ",
        note: "SRAMで構成され、DRAM（主記憶）よりも高速にCPUへデータを供給する。",
        tags: ["ハードウェア", "CPU"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_it_3",
        front: "DNS (Domain Name System)",
        back: "ドメイン名とIPアドレスを相互変換（名前解決）する仕組み",
        note: "例: 'example.com' を '93.184.216.34' に紐付ける。",
        tags: ["ネットワーク", "プロトコル"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_it_4",
        front: "ACID特性 (ACID Properties)",
        back: "データベーストランザクションが満たすべき4つの性質",
        note: "Atomicity（原子性）、Consistency（一貫性）、Isolation（独立性）、Durability（永続性）。",
        tags: ["データベース"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_it_5",
        front: "フィッシング (Phishing)",
        back: "偽の電子メールやWebサイトで個人情報やパスワードを騙し取る手口",
        note: "実在の銀行や宅配業者を装い、偽のログイン画面に誘導する。",
        tags: ["セキュリティ", "脅威"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      }
    ]
  },
  {
    id: "deck_biz_model",
    title: "ビジネス・思考法フレームワーク",
    description: "問題解決や戦略立案に即効で使える思考ツール。",
    created_at: new Date().toISOString(),
    cards: [
      {
        id: "c_biz_1",
        front: "MECE (ミーシー / ミッシー)",
        back: "Mutually Exclusive, Collectively Exhaustive (モレなくダブりなく)",
        note: "論理思考の基本。全体を重複なく完全に網羅して分類・整理すること。",
        tags: ["思考法", "ロジカルシンキング"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_biz_2",
        front: "3C分析",
        back: "Customer (市場・顧客), Competitor (競合), Company (自社)",
        note: "外部環境と内部環境を分析し、自社の成功要因（KSF）を見つけ出すフレームワーク。",
        tags: ["マーケティング", "戦略"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      },
      {
        id: "c_biz_3",
        front: "SWOT分析",
        back: "Strengths (強み), Weaknesses (弱み), Opportunities (機会), Threats (脅威)",
        note: "内部環境（強み・弱み）と外部環境（機会・脅威）を掛け合わせて戦略を導く手法。",
        tags: ["経営戦略"],
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date().toISOString(),
        lastReviewed: null
      }
    ]
  }
];

// --- App State ---
const State = {
  decks: [],
  currentDeckId: null,
  activeView: 'decks', // 'decks', 'study', 'cards', 'stats', 'settings'
  cardsViewMode: 'normal', // 'normal' (表→裏) | 'reverse' (裏→表)
  statsViewMode: 'normal', // 'normal' (表→裏) | 'reverse' (裏→表)
  
  // Study session with 20-batch limitation and reverse mode
  studySession: {
    cardsQueue: [],
    currentCard: null,
    studyMode: 'normal',     // 'normal' (表→裏) | 'reverse' (裏→表)
    sessionBatchAnswered: 0, // 回答回数 (0〜20)
    sessionBatchNumber: 1,    // 何セット目か
    isAnswerRevealed: false,
    sessionStats: {
      againCount: 0,
      hardCount: 0,
      goodCount: 0,
      easyCount: 0
    }
  },

  // Stats
  streak: 0,
  lastStudyDate: null
};

// --- Storage & Data Helpers ---
const STORAGE_KEY = "recallflow_app_data";
const STATS_KEY = "recallflow_user_stats";

// Ensure reverse SM-2 properties exist on a card
function ensureCardReverse(card) {
  if (!card.reverse) {
    card.reverse = {
      repetitions: 0,
      interval: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString(),
      lastReviewed: null
    };
  }
  return card.reverse;
}

// Get SM-2 properties for specific mode
function getCardSM2(card, mode = 'normal') {
  if (mode === 'reverse') {
    return ensureCardReverse(card);
  }
  return {
    repetitions: card.repetitions !== undefined ? card.repetitions : 0,
    interval: card.interval !== undefined ? card.interval : 0,
    easeFactor: card.easeFactor !== undefined ? card.easeFactor : 2.5,
    nextReviewDate: card.nextReviewDate || new Date().toISOString(),
    lastReviewed: card.lastReviewed || null
  };
}

// Update SM-2 properties for specific mode
function updateCardSM2(card, sm2Data, mode = 'normal') {
  if (mode === 'reverse') {
    ensureCardReverse(card);
    Object.assign(card.reverse, sm2Data);
  } else {
    Object.assign(card, sm2Data);
  }
}

function loadData() {
  const savedDecks = localStorage.getItem(STORAGE_KEY);
  if (savedDecks) {
    try {
      State.decks = JSON.parse(savedDecks);
    } catch (e) {
      console.error("Failed to parse saved decks, using preset.", e);
      State.decks = JSON.parse(JSON.stringify(PRESET_DECKS));
    }
  } else {
    State.decks = JSON.parse(JSON.stringify(PRESET_DECKS));
  }

  // Ensure all cards have reverse progress initialized
  State.decks.forEach(d => {
    d.cards.forEach(c => ensureCardReverse(c));
  });
  saveData();

  const savedStats = localStorage.getItem(STATS_KEY);
  if (savedStats) {
    try {
      const stats = JSON.parse(savedStats);
      State.streak = stats.streak || 0;
      State.lastStudyDate = stats.lastStudyDate || null;
      checkStreak();
    } catch (e) {
      console.error(e);
    }
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(State.decks));
}

function saveStats() {
  localStorage.setItem(STATS_KEY, JSON.stringify({
    streak: State.streak,
    lastStudyDate: State.lastStudyDate
  }));
}

function checkStreak() {
  if (!State.lastStudyDate) return;
  const today = new Date().toDateString();
  const lastDate = new Date(State.lastStudyDate).toDateString();
  
  const diffDays = Math.floor((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));
  if (diffDays > 1) {
    State.streak = 0; // Streak broken
    saveStats();
  }
}

function recordStudyActivity() {
  const today = new Date().toDateString();
  if (State.lastStudyDate) {
    const lastDate = new Date(State.lastStudyDate).toDateString();
    const diffDays = Math.floor((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      State.streak += 1;
    } else if (diffDays === 0) {
      if (State.streak === 0) State.streak = 1;
    } else {
      State.streak = 1;
    }
  } else {
    State.streak = 1;
  }
  State.lastStudyDate = new Date().toISOString();
  saveStats();
  updateStreakUI();
}

function updateStreakUI() {
  const el = document.getElementById("streak-display");
  if (el) el.textContent = `${State.streak} 日連続`;
}

// --- SM-2 Spaced Repetition Engine (Mode-aware) ---
function calculateSM2(card, rating, mode = 'normal') {
  const sm2 = getCardSM2(card, mode);
  let { repetitions, interval, easeFactor } = sm2;

  const quality = rating === 1 ? 1 : rating === 2 ? 3 : rating === 3 ? 4 : 5;
  
  let newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (newEaseFactor < 1.3) newEaseFactor = 1.3;

  let newRepetitions = repetitions;
  let newInterval = 1;

  if (rating === 1) {
    newRepetitions = 0;
    newInterval = 0;
  } else if (rating === 2) {
    newRepetitions += 1;
    newInterval = interval <= 1 ? 1 : Math.round(interval * 1.2);
  } else if (rating === 3) {
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
    newRepetitions += 1;
  } else if (rating === 4) {
    if (repetitions === 0) {
      newInterval = 3;
    } else if (repetitions === 1) {
      newInterval = 8;
    } else {
      newInterval = Math.round(interval * easeFactor * 1.35);
    }
    newRepetitions += 1;
  }

  const nextDate = new Date();
  if (newInterval === 0) {
    nextDate.setMinutes(nextDate.getMinutes() + 10);
  } else {
    nextDate.setDate(nextDate.getDate() + newInterval);
    nextDate.setHours(4, 0, 0, 0);
  }

  return {
    repetitions: newRepetitions,
    interval: newInterval,
    easeFactor: Math.round(newEaseFactor * 100) / 100,
    nextReviewDate: nextDate.toISOString(),
    lastReviewed: new Date().toISOString()
  };
}

function getPreviewIntervalText(card, rating, mode = 'normal') {
  const result = calculateSM2(card, rating, mode);
  if (result.interval === 0) return "< 10分";
  if (result.interval === 1) return "明日 (1日)";
  return `${result.interval} 日後`;
}

function isCardDue(card, mode = 'normal') {
  const sm2 = getCardSM2(card, mode);
  if (!sm2.nextReviewDate) return true;
  const dueDate = new Date(sm2.nextReviewDate);
  const now = new Date();
  return dueDate <= now;
}

// --- Navigation & View Switching ---
function switchView(viewName) {
  State.activeView = viewName;
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  const targetNav = document.getElementById(`nav-${viewName}`);
  if (targetView) targetView.classList.add('active');
  if (targetNav) targetNav.classList.add('active');

  if (viewName === 'decks') renderDecksView();
  if (viewName === 'cards') renderCardsManagementView();
  if (viewName === 'stats') renderStatsView();
}

// --- Decks View ---
function renderDecksView() {
  const container = document.getElementById('decks-list-container');
  if (!container) return;
  container.innerHTML = '';

  State.decks.forEach(deck => {
    const normalDueCount = deck.cards.filter(c => isCardDue(c, 'normal')).length;
    const reverseDueCount = deck.cards.filter(c => isCardDue(c, 'reverse')).length;
    const totalCount = deck.cards.length;

    const cardEl = document.createElement('div');
    cardEl.className = 'deck-card';
    cardEl.innerHTML = `
      <div class="deck-card-top">
        <h3 class="deck-card-title">${escapeHTML(deck.title)}</h3>
        <div class="deck-menu-container">
          <button class="deck-menu-btn" title="デッキ操作メニュー">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="12" cy="19" r="2"></circle>
            </svg>
          </button>
          <div class="deck-dropdown-menu">
            <button class="dropdown-item edit-deck-action">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              デッキ編集
            </button>
            <button class="dropdown-item text-danger delete-deck-action">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              デッキ削除
            </button>
          </div>
        </div>
      </div>
      <p class="deck-card-desc">${escapeHTML(deck.description || "説明なし")}</p>
      <div class="deck-counts">
        <span class="count-pill count-due" title="表→裏で復習が必要なカード">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          表→裏: ${normalDueCount}枚
        </span>
        <span class="count-pill count-due-reverse" title="裏→表で復習が必要なカード">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          裏→表: ${reverseDueCount}枚
        </span>
        <span class="count-pill count-total">全${totalCount}枚</span>
      </div>
      <div class="deck-actions">
        <div class="deck-study-row">
          <button class="btn btn-primary start-study-btn" data-deck-id="${deck.id}">
            表→裏で学習
          </button>
          <button class="btn btn-reverse start-reverse-btn" data-deck-id="${deck.id}">
            裏→表 (反転)
          </button>
        </div>
        <button class="btn btn-secondary manage-cards-btn" data-deck-id="${deck.id}">カード管理</button>
      </div>
    `;

    // Dropdown toggle
    const menuBtn = cardEl.querySelector('.deck-menu-btn');
    const dropdown = cardEl.querySelector('.deck-dropdown-menu');
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.deck-dropdown-menu.show').forEach(el => {
        if (el !== dropdown) el.classList.remove('show');
      });
      dropdown.classList.toggle('show');
    });

    // Dropdown Edit
    cardEl.querySelector('.edit-deck-action').addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.remove('show');
      openEditDeckModal(deck);
    });

    // Dropdown Delete
    cardEl.querySelector('.delete-deck-action').addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.remove('show');
      deleteDeck(deck.id);
    });

    // Study: Normal (Front -> Back)
    cardEl.querySelector('.start-study-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startStudySession(deck.id, false, 'normal');
    });

    // Study: Reverse (Back -> Front)
    cardEl.querySelector('.start-reverse-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startStudySession(deck.id, false, 'reverse');
    });

    cardEl.querySelector('.manage-cards-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      State.currentDeckId = deck.id;
      switchView('cards');
    });

    cardEl.addEventListener('click', () => {
      startStudySession(deck.id, false, 'normal');
    });

    container.appendChild(cardEl);
  });
}

// --- Study Session View (20 Questions Batch Mode & Reverse Support) ---
function startStudySession(deckId, continueSameQueue = false, mode = 'normal') {
  const deck = State.decks.find(d => d.id === deckId);
  if (!deck) return;

  State.currentDeckId = deckId;

  if (!continueSameQueue) {
    State.studySession.studyMode = mode;
    // Initial start: gather due cards for chosen mode
    let queue = deck.cards.filter(c => isCardDue(c, mode));
    
    // If no due cards, give option to review all
    if (queue.length === 0 && deck.cards.length > 0) {
      const modeLabel = mode === 'reverse' ? '反転モード（裏→表）' : '通常モード（表→裏）';
      if (confirm(`${modeLabel}の今日の復習予定カードは完了しています。\n全カードを予習・再復習しますか？`)) {
        queue = [...deck.cards];
      } else {
        return;
      }
    }

    if (deck.cards.length === 0) {
      showToast("このデッキにはカードがありません。カードを追加してください。");
      switchView('cards');
      return;
    }

    shuffleArray(queue);

    State.studySession = {
      cardsQueue: queue,
      currentCard: null,
      studyMode: mode,
      sessionBatchAnswered: 0,
      sessionBatchNumber: 1,
      isAnswerRevealed: false,
      sessionStats: {
        againCount: 0,
        hardCount: 0,
        goodCount: 0,
        easyCount: 0
      }
    };
  } else {
    // Continue next 20 questions with remaining queue
    State.studySession.sessionBatchAnswered = 0;
    State.studySession.sessionBatchNumber += 1;
    State.studySession.sessionStats = {
      againCount: 0,
      hardCount: 0,
      goodCount: 0,
      easyCount: 0
    };
  }

  switchView('study');
  document.getElementById('study-deck-title').textContent = deck.title;
  renderCurrentStudyCard();
}

function renderCurrentStudyCard() {
  const session = State.studySession;
  const finishContainer = document.getElementById('session-finished-container');
  const flashcardWrapper = document.getElementById('flashcard-wrapper');
  const controlsWrapper = document.getElementById('study-controls');
  const progressBar = document.getElementById('study-progress-fill');
  const mode = session.studyMode || 'normal';

  // Check if current 20-question batch is done, OR if queue is completely empty
  const isBatchFinished = session.sessionBatchAnswered >= SESSION_BATCH_LIMIT;
  const isQueueEmpty = session.cardsQueue.length === 0;

  if (isBatchFinished || isQueueEmpty) {
    // Show 20-question break / completion screen
    finishContainer.classList.add('show');
    flashcardWrapper.style.display = 'none';
    controlsWrapper.style.display = 'none';

    const totalAnsweredThisBatch = session.sessionBatchAnswered;
    document.getElementById('stat-session-count').textContent = totalAnsweredThisBatch;

    const goodOrEasy = session.sessionStats.goodCount + session.sessionStats.easyCount;
    const successRate = totalAnsweredThisBatch > 0 
      ? Math.round((goodOrEasy / totalAnsweredThisBatch) * 100) 
      : 100;
    document.getElementById('stat-success-rate').textContent = `${successRate}%`;

    const remainingInQueue = session.cardsQueue.length;
    document.getElementById('stat-remaining-queue').textContent = remainingInQueue;

    const titleEl = document.getElementById('session-finish-title');
    const subtitleEl = document.getElementById('session-finish-subtitle');
    const continueBtn = document.getElementById('btn-session-continue');
    const modeLabel = mode === 'reverse' ? '反転モード' : '通常モード';

    if (remainingInQueue > 0) {
      titleEl.textContent = `${session.sessionBatchNumber}セット目（${totalAnsweredThisBatch}問）完了！[${modeLabel}]`;
      subtitleEl.textContent = `集中して一区切りつきました。まだ復習待ちカードが ${remainingInQueue} 枚あります。`;
      continueBtn.style.display = 'inline-flex';
      continueBtn.innerHTML = `次の20問を続ける <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    } else {
      titleEl.textContent = `本日の復習カードをすべて制覇！🎉 [${modeLabel}]`;
      subtitleEl.textContent = `予定されていたすべてのカードを解き終えました。素晴らしい継続力です！`;
      continueBtn.style.display = 'none';
    }

    recordStudyActivity();
    return;
  }

  // Active Card Study
  finishContainer.classList.remove('show');
  flashcardWrapper.style.display = 'block';
  controlsWrapper.style.display = 'flex';

  // Get current active card from head of queue
  session.currentCard = session.cardsQueue[0];
  const card = session.currentCard;
  session.isAnswerRevealed = false;

  // Header badges & indicators
  const modeBadge = document.getElementById('study-mode-badge');
  if (modeBadge) {
    if (mode === 'reverse') {
      modeBadge.className = 'count-pill mode-badge-reverse';
      modeBadge.textContent = '裏→表 (反転)';
    } else {
      modeBadge.className = 'count-pill mode-badge-normal';
      modeBadge.textContent = '表→裏 (通常)';
    }
  }

  document.getElementById('study-batch-indicator').textContent = `${session.sessionBatchNumber}セット目`;
  
  const currentQuestionNumber = session.sessionBatchAnswered + 1;
  const targetBatchTotal = Math.min(SESSION_BATCH_LIMIT, session.sessionBatchAnswered + session.cardsQueue.length);
  document.getElementById('study-queue-count').textContent = `${currentQuestionNumber} / ${targetBatchTotal} 問`;

  const progressPct = (session.sessionBatchAnswered / SESSION_BATCH_LIMIT) * 100;
  progressBar.style.width = `${progressPct}%`;

  // Populate Card Question & Answer based on Mode!
  // In Reverse Mode: Back is Question, Front is Answer
  const questionText = mode === 'reverse' ? card.back : card.front;
  const answerText = mode === 'reverse' ? card.front : card.back;

  document.getElementById('study-card-front').textContent = questionText;
  document.getElementById('study-card-back').textContent = answerText;
  
  const noteEl = document.getElementById('study-card-note');
  if (card.note && card.note.trim()) {
    noteEl.textContent = card.note;
    noteEl.style.display = 'block';
  } else {
    noteEl.style.display = 'none';
  }

  const tagsEl = document.getElementById('study-card-tags');
  tagsEl.innerHTML = '';
  if (card.tags && card.tags.length) {
    card.tags.forEach(t => {
      const sp = document.createElement('span');
      sp.className = 'tag-badge';
      sp.textContent = `#${t}`;
      tagsEl.appendChild(sp);
    });
  }

  // Display mode-specific interval & ease
  const sm2 = getCardSM2(card, mode);
  document.getElementById('study-card-interval-info').textContent = 
    `定着間隔 (${mode === 'reverse' ? '裏→表' : '表→裏'}): ${sm2.interval}日 (Ease: ${sm2.easeFactor})`;

  // Reset answer controls state
  document.getElementById('card-answer-box').classList.remove('show');
  document.getElementById('card-divider').classList.remove('show');
  document.getElementById('btn-reveal-answer').style.display = 'inline-flex';
  document.getElementById('rating-buttons-grid').classList.remove('show');

  // Preview intervals for buttons in this mode
  document.getElementById('preview-again').textContent = getPreviewIntervalText(card, 1, mode);
  document.getElementById('preview-hard').textContent = getPreviewIntervalText(card, 2, mode);
  document.getElementById('preview-good').textContent = getPreviewIntervalText(card, 3, mode);
  document.getElementById('preview-easy').textContent = getPreviewIntervalText(card, 4, mode);
}

function revealAnswer() {
  const session = State.studySession;
  if (session.isAnswerRevealed) return;
  
  session.isAnswerRevealed = true;
  document.getElementById('card-answer-box').classList.add('show');
  document.getElementById('card-divider').classList.add('show');
  document.getElementById('btn-reveal-answer').style.display = 'none';
  document.getElementById('rating-buttons-grid').classList.add('show');

  // Auto speech if front or back is likely English
  const card = session.currentCard;
  if (card) {
    // In reverse mode, pronounce the English answer (usually card.front)
    const textToSpeak = isLikelyEnglish(card.front) ? card.front : (isLikelyEnglish(card.back) ? card.back : "");
    if (textToSpeak) speakText(textToSpeak);
  }
}

function processRating(rating) {
  const session = State.studySession;
  if (!session.currentCard || session.cardsQueue.length === 0) return;

  const mode = session.studyMode || 'normal';

  // Pop current card from the queue
  const currentCard = session.cardsQueue.shift();

  // Calculate new SM-2 values for this mode independently!
  const sm2Update = calculateSM2(currentCard, rating, mode);
  updateCardSM2(currentCard, sm2Update, mode);

  // Update session counters
  session.sessionBatchAnswered += 1;
  if (rating === 1) session.sessionStats.againCount += 1;
  if (rating === 2) session.sessionStats.hardCount += 1;
  if (rating === 3) session.sessionStats.goodCount += 1;
  if (rating === 4) session.sessionStats.easyCount += 1;

  // If "Again", re-insert at the end of the queue for review
  if (rating === 1) {
    session.cardsQueue.push(currentCard);
  }

  // Persist update
  saveData();

  // Render next card or 20-batch finish screen
  renderCurrentStudyCard();
}

// --- Text-to-Speech (Web Speech API) ---
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  if (isLikelyEnglish(text)) {
    utterance.lang = 'en-US';
  } else {
    utterance.lang = 'ja-JP';
  }
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

function isLikelyEnglish(text) {
  return /^[A-Za-z0-9\s.,!?'"()-]+$/.test(text);
}

// --- Cards Management View ---
function renderCardsManagementView() {
  const selectEl = document.getElementById('card-deck-select');
  selectEl.innerHTML = '';

  State.decks.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = `${d.title} (${d.cards.length}枚)`;
    if (d.id === State.currentDeckId) opt.selected = true;
    selectEl.appendChild(opt);
  });

  if (!State.currentDeckId && State.decks.length > 0) {
    State.currentDeckId = State.decks[0].id;
  }

  filterAndRenderCardsTable();
}

function filterAndRenderCardsTable() {
  const deck = State.decks.find(d => d.id === State.currentDeckId);
  const tbody = document.getElementById('cards-table-body');
  const searchTxt = (document.getElementById('card-search-input').value || '').toLowerCase();
  tbody.innerHTML = '';

  if (!deck) return;

  const mode = State.cardsViewMode || 'normal';

  // Toggle button active classes
  const btnNorm = document.getElementById('btn-cards-mode-normal');
  const btnRev = document.getElementById('btn-cards-mode-reverse');
  if (btnNorm && btnRev) {
    btnNorm.classList.toggle('active', mode === 'normal');
    btnRev.classList.toggle('active', mode === 'reverse');
  }

  const filtered = deck.cards.filter(c => 
    c.front.toLowerCase().includes(searchTxt) ||
    c.back.toLowerCase().includes(searchTxt) ||
    (c.tags && c.tags.some(t => t.toLowerCase().includes(searchTxt)))
  );

  const modeLabel = mode === 'reverse' ? '反転 (裏→表)' : '通常 (表→裏)';
  document.getElementById('card-count-indicator').textContent = `${filtered.length} 枚表示中 [${modeLabel}] (全${deck.cards.length}枚)`;

  filtered.forEach(card => {
    const sm2 = getCardSM2(card, mode);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="front-col">${escapeHTML(card.front)}</td>
      <td class="back-col">${escapeHTML(card.back)}</td>
      <td>${sm2.interval}日後</td>
      <td>${sm2.easeFactor}</td>
      <td>${card.tags ? card.tags.map(t => `#${t}`).join(' ') : ''}</td>
      <td style="text-align: right;">
        <button class="table-action-btn edit-card-btn" title="編集">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
        <button class="table-action-btn delete delete-card-btn" title="削除">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    `;

    tr.querySelector('.edit-card-btn').addEventListener('click', () => openEditCardModal(card));
    tr.querySelector('.delete-card-btn').addEventListener('click', () => deleteCard(card.id));

    tbody.appendChild(tr);
  });
}

function openAddCardModal() {
  document.getElementById('modal-card-title').textContent = "新規カード追加";
  document.getElementById('card-edit-id').value = "";
  document.getElementById('card-front-input').value = "";
  document.getElementById('card-back-input').value = "";
  document.getElementById('card-note-input').value = "";
  document.getElementById('card-tags-input').value = "";
  document.getElementById('card-modal').classList.add('show');
}

function openEditCardModal(card) {
  document.getElementById('modal-card-title').textContent = "カードを編集";
  document.getElementById('card-edit-id').value = card.id;
  document.getElementById('card-front-input').value = card.front;
  document.getElementById('card-back-input').value = card.back;
  document.getElementById('card-note-input').value = card.note || "";
  document.getElementById('card-tags-input').value = card.tags ? card.tags.join(', ') : "";
  document.getElementById('card-modal').classList.add('show');
}

function saveCardFromModal() {
  const cardId = document.getElementById('card-edit-id').value;
  const front = document.getElementById('card-front-input').value.trim();
  const back = document.getElementById('card-back-input').value.trim();
  const note = document.getElementById('card-note-input').value.trim();
  const tagsRaw = document.getElementById('card-tags-input').value.trim();
  const tags = tagsRaw ? tagsRaw.split(/[,、\s]+/).filter(Boolean) : [];

  if (!front || !back) {
    showToast("表面と裏面は必須です");
    return;
  }

  const deck = State.decks.find(d => d.id === State.currentDeckId);
  if (!deck) return;

  if (cardId) {
    const card = deck.cards.find(c => c.id === cardId);
    if (card) {
      card.front = front;
      card.back = back;
      card.note = note;
      card.tags = tags;
      showToast("カードを更新しました");
    }
  } else {
    const now = new Date().toISOString();
    const newCard = {
      id: "c_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      front,
      back,
      note,
      tags,
      repetitions: 0,
      interval: 0,
      easeFactor: 2.5,
      nextReviewDate: now,
      lastReviewed: null,
      reverse: {
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: now,
        lastReviewed: null
      }
    };
    deck.cards.unshift(newCard);
    showToast("カードを追加しました");
  }

  saveData();
  closeCardModal();
  filterAndRenderCardsTable();
}

function closeCardModal() {
  document.getElementById('card-modal').classList.remove('show');
}

function deleteCard(cardId) {
  if (!confirm("このカードを削除しますか？")) return;
  const deck = State.decks.find(d => d.id === State.currentDeckId);
  if (!deck) return;
  deck.cards = deck.cards.filter(c => c.id !== cardId);
  saveData();
  filterAndRenderCardsTable();
  showToast("カードを削除しました");
}

// --- Deck Management (Create / Edit / Delete) ---
function openCreateDeckModal() {
  document.getElementById('modal-deck-title').textContent = "新規デッキ作成";
  document.getElementById('deck-edit-id').value = "";
  document.getElementById('deck-title-input').value = "";
  document.getElementById('deck-desc-input').value = "";
  document.getElementById('deck-modal').classList.add('show');
}

function openEditDeckModal(deck) {
  document.getElementById('modal-deck-title').textContent = "デッキ編集";
  document.getElementById('deck-edit-id').value = deck.id;
  document.getElementById('deck-title-input').value = deck.title;
  document.getElementById('deck-desc-input').value = deck.description || "";
  document.getElementById('deck-modal').classList.add('show');
}

function closeDeckModal() {
  document.getElementById('deck-modal').classList.remove('show');
}

function saveDeckFromModal() {
  const editId = document.getElementById('deck-edit-id').value;
  const title = document.getElementById('deck-title-input').value.trim();
  const desc = document.getElementById('deck-desc-input').value.trim();

  if (!title) {
    showToast("デッキ名を入力してください");
    return;
  }

  if (editId) {
    const deck = State.decks.find(d => d.id === editId);
    if (deck) {
      deck.title = title;
      deck.description = desc;
      showToast("デッキを更新しました");
    }
  } else {
    const newDeck = {
      id: "deck_" + Date.now(),
      title,
      description: desc,
      created_at: new Date().toISOString(),
      cards: []
    };
    State.decks.push(newDeck);
    showToast("新しいデッキを作成しました");
  }

  saveData();
  closeDeckModal();
  renderDecksView();
}

function deleteDeck(deckId) {
  const deck = State.decks.find(d => d.id === deckId);
  if (!deck) return;
  if (!confirm(`「${deck.title}」を削除しますか？\n登録されている ${deck.cards.length} 枚のカードもすべて削除されます。`)) {
    return;
  }

  State.decks = State.decks.filter(d => d.id !== deckId);
  if (State.currentDeckId === deckId) {
    State.currentDeckId = State.decks.length > 0 ? State.decks[0].id : null;
  }
  saveData();
  renderDecksView();
  showToast(`デッキ「${deck.title}」を削除しました`);
}

// --- Stats & Forgetting Curve Analytics (Mode-aware) ---
function renderStatsView() {
  const mode = State.statsViewMode || 'normal';

  // Toggle button active classes
  const btnNorm = document.getElementById('btn-stats-mode-normal');
  const btnRev = document.getElementById('btn-stats-mode-reverse');
  if (btnNorm && btnRev) {
    btnNorm.classList.toggle('active', mode === 'normal');
    btnRev.classList.toggle('active', mode === 'reverse');
    btnRev.classList.toggle('reverse-active', mode === 'reverse');
  }

  const subtitleEl = document.getElementById('stats-subtitle');
  if (subtitleEl) {
    subtitleEl.textContent = mode === 'reverse' 
      ? '【反転モード (裏→表)】の記憶定着・忘却曲線ステータス'
      : '【通常モード (表→裏)】の記憶定着・忘却曲線ステータス';
  }

  let totalCards = 0;
  let matureCards = 0;
  let learningCards = 0;
  let newCards = 0;

  const scheduleDays = [0, 0, 0, 0, 0, 0, 0];
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  State.decks.forEach(d => {
    d.cards.forEach(c => {
      totalCards++;
      const sm2 = getCardSM2(c, mode);
      if (sm2.repetitions === 0) {
        newCards++;
      } else if (sm2.interval >= 21) {
        matureCards++;
      } else {
        learningCards++;
      }

      if (sm2.nextReviewDate) {
        const dueDate = new Date(sm2.nextReviewDate);
        dueDate.setHours(0, 0, 0, 0);
        const dayDiff = Math.round((dueDate - now) / (1000 * 60 * 60 * 24));
        if (dayDiff >= 0 && dayDiff < 7) {
          scheduleDays[dayDiff]++;
        } else if (dayDiff < 0) {
          scheduleDays[0]++;
        }
      }
    });
  });

  document.getElementById('stat-total-cards').textContent = totalCards;
  document.getElementById('stat-mature-cards').textContent = matureCards;
  document.getElementById('stat-learning-cards').textContent = learningCards;
  document.getElementById('stat-new-cards').textContent = newCards;

  const chartContainer = document.getElementById('forecast-chart-bars');
  chartContainer.innerHTML = '';
  const maxDayCount = Math.max(...scheduleDays, 5);
  const dayLabels = ["今日", "明日", "3日目", "4日目", "5日目", "6日目", "7日目"];

  scheduleDays.forEach((count, idx) => {
    const col = document.createElement('div');
    col.className = 'chart-bar-col';
    const heightPct = (count / maxDayCount) * 100;
    const barGradient = mode === 'reverse'
      ? 'linear-gradient(180deg, #7c3aed 0%, #c4b5fd 100%)'
      : 'linear-gradient(180deg, #2563eb 0%, #93c5fd 100%)';
    const textColor = mode === 'reverse' ? '#7c3aed' : '#2563eb';

    col.innerHTML = `
      <span class="chart-bar-val" style="color: ${textColor};">${count}</span>
      <div class="chart-bar" style="height: ${Math.max(heightPct, 4)}%; background: ${barGradient};"></div>
      <span class="chart-bar-label">${dayLabels[idx]}</span>
    `;
    chartContainer.appendChild(col);
  });
}

// --- Import / Export / Backup ---
function exportDataAsJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(State.decks, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `recallflow_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("バックアップJSONを出力しました");
}

function importDataFromJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (Array.isArray(parsed)) {
        State.decks = parsed;
        saveData();
        showToast("バックアップデータを復元しました！");
        switchView('decks');
      } else {
        alert("無効なJSONフォーマットです");
      }
    } catch (err) {
      alert("JSONファイルの読み込みに失敗しました: " + err.message);
    }
  };
  reader.readAsText(file);
}

function exportCurrentDeckCSV() {
  const deck = State.decks.find(d => d.id === State.currentDeckId);
  if (!deck) {
    showToast("デッキを選択してください");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,\uFEFF表面,裏面,備考,タグ\n";
  deck.cards.forEach(c => {
    const front = `"${(c.front || '').replace(/"/g, '""')}"`;
    const back = `"${(c.back || '').replace(/"/g, '""')}"`;
    const note = `"${(c.note || '').replace(/"/g, '""')}"`;
    const tags = `"${(c.tags ? c.tags.join(';') : '').replace(/"/g, '""')}"`;
    csvContent += `${front},${back},${note},${tags}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${deck.title}_cards.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("CSVファイルを出力しました");
}

function importDeckCSV(event) {
  const file = event.target.files[0];
  if (!file) return;

  const deck = State.decks.find(d => d.id === State.currentDeckId);
  if (!deck) {
    alert("カードをインポートするデッキを選択してください");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split(/\r?\n/);
    let addedCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      if (i === 0 && (line.includes("表面") || line.includes("front"))) continue;

      const parts = line.split(',').map(s => s.replace(/^"|"$/g, '').trim());
      if (parts.length >= 2 && parts[0] && parts[1]) {
        const now = new Date().toISOString();
        deck.cards.push({
          id: "c_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
          front: parts[0],
          back: parts[1],
          note: parts[2] || "",
          tags: parts[3] ? parts[3].split(/[;,\s]+/) : [],
          repetitions: 0,
          interval: 0,
          easeFactor: 2.5,
          nextReviewDate: now,
          lastReviewed: null,
          reverse: {
            repetitions: 0,
            interval: 0,
            easeFactor: 2.5,
            nextReviewDate: now,
            lastReviewed: null
          }
        });
        addedCount++;
      }
    }

    saveData();
    filterAndRenderCardsTable();
    showToast(`${addedCount} 枚のカードをインポートしました！`);
  };
  reader.readAsText(file);
}

function resetToPresetData() {
  if (confirm("全てのデッキとカードを初期プリセットにリセットしますか？\n（現在のデータは上書きされます）")) {
    State.decks = JSON.parse(JSON.stringify(PRESET_DECKS));
    saveData();
    renderDecksView();
    showToast("初期データにリセットしました");
  }
}

// --- Keyboard Shortcuts & Utilities ---
function setupKeyboardListeners() {
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (document.querySelector('.modal-overlay.show')) return;

    if (State.activeView === 'study') {
      const finishContainer = document.getElementById('session-finished-container');
      
      // If in finish / break screen
      if (finishContainer.classList.contains('show')) {
        if (e.code === 'Space' || e.code === 'Enter') {
          // If continue button is visible, continue; otherwise go back
          const continueBtn = document.getElementById('btn-session-continue');
          if (continueBtn && continueBtn.style.display !== 'none') {
            e.preventDefault();
            startStudySession(State.currentDeckId, true, State.studySession.studyMode);
          } else {
            switchView('decks');
          }
        }
        if (e.code === 'Escape') {
          switchView('decks');
        }
        return;
      }

      const session = State.studySession;
      if (!session.isAnswerRevealed) {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          revealAnswer();
        }
      } else {
        if (e.key === 'a' || e.key === 'A') processRating(1);
        if (e.key === 's' || e.key === 'S') processRating(2);
        if (e.key === 'd' || e.key === 'D') processRating(3);
        if (e.key === 'f' || e.key === 'F') processRating(4);
      }

      if (e.key === 'r' || e.key === 'R') {
        const card = session.currentCard;
        if (card) speakText(card.front);
      }
    }
  });
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHTML(msg)}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// --- App Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  loadData();
  setupKeyboardListeners();
  updateStreakUI();

  // Navigation Click Handlers
  document.getElementById('nav-decks').addEventListener('click', () => switchView('decks'));
  document.getElementById('nav-cards').addEventListener('click', () => switchView('cards'));
  document.getElementById('nav-stats').addEventListener('click', () => switchView('stats'));
  document.getElementById('nav-settings').addEventListener('click', () => switchView('settings'));

  // Study Controls Handlers
  document.getElementById('btn-reveal-answer').addEventListener('click', revealAnswer);
  document.getElementById('btn-rate-again').addEventListener('click', () => processRating(1));
  document.getElementById('btn-rate-hard').addEventListener('click', () => processRating(2));
  document.getElementById('btn-rate-good').addEventListener('click', () => processRating(3));
  document.getElementById('btn-rate-easy').addEventListener('click', () => processRating(4));

  document.getElementById('btn-study-speak').addEventListener('click', () => {
    const session = State.studySession;
    if (session.currentCard) speakText(session.currentCard.front);
  });

  // Finish screen: Continue next 20 questions or Stop
  document.getElementById('btn-session-continue').addEventListener('click', () => {
    startStudySession(State.currentDeckId, true, State.studySession.studyMode);
  });
  document.getElementById('btn-session-done-back').addEventListener('click', () => {
    switchView('decks');
  });

  // Cards Table Mode Toggles
  const btnCardsNorm = document.getElementById('btn-cards-mode-normal');
  const btnCardsRev = document.getElementById('btn-cards-mode-reverse');
  if (btnCardsNorm && btnCardsRev) {
    btnCardsNorm.addEventListener('click', () => {
      State.cardsViewMode = 'normal';
      filterAndRenderCardsTable();
    });
    btnCardsRev.addEventListener('click', () => {
      State.cardsViewMode = 'reverse';
      filterAndRenderCardsTable();
    });
  }

  // Stats Mode Toggles
  const btnStatsNorm = document.getElementById('btn-stats-mode-normal');
  const btnStatsRev = document.getElementById('btn-stats-mode-reverse');
  if (btnStatsNorm && btnStatsRev) {
    btnStatsNorm.addEventListener('click', () => {
      State.statsViewMode = 'normal';
      renderStatsView();
    });
    btnStatsRev.addEventListener('click', () => {
      State.statsViewMode = 'reverse';
      renderStatsView();
    });
  }

  // Cards Table Controls
  document.getElementById('card-deck-select').addEventListener('change', (e) => {
    State.currentDeckId = e.target.value;
    filterAndRenderCardsTable();
  });
  document.getElementById('card-search-input').addEventListener('input', filterAndRenderCardsTable);
  document.getElementById('btn-open-add-card').addEventListener('click', openAddCardModal);
  document.getElementById('btn-save-card-modal').addEventListener('click', saveCardFromModal);
  document.getElementById('btn-cancel-card-modal').addEventListener('click', closeCardModal);
  document.getElementById('card-modal-close').addEventListener('click', closeCardModal);

  // Deck Modal Handlers
  document.getElementById('btn-open-add-deck').addEventListener('click', openCreateDeckModal);
  document.getElementById('btn-save-deck-modal').addEventListener('click', saveDeckFromModal);
  document.getElementById('btn-cancel-deck-modal').addEventListener('click', closeDeckModal);
  document.getElementById('deck-modal-close').addEventListener('click', closeDeckModal);

  // Settings & Backup Handlers
  document.getElementById('btn-export-json').addEventListener('click', exportDataAsJSON);
  document.getElementById('json-import-input').addEventListener('change', importDataFromJSON);
  document.getElementById('btn-export-csv').addEventListener('click', exportCurrentDeckCSV);
  document.getElementById('csv-import-input').addEventListener('change', importDeckCSV);
  document.getElementById('btn-reset-preset').addEventListener('click', resetToPresetData);

  // Close any open dropdown menus when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.deck-dropdown-menu.show').forEach(el => {
      el.classList.remove('show');
    });
  });

  // Start with decks view
  switchView('decks');
});
