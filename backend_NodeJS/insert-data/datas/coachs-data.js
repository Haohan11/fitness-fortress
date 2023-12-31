const coachs = [
  {
    nickname: 'Lily',
    img: 'lily.jpg',
    location: 1,
    introduction:
      '嗨，大家好！我是Lily，一位充滿活力和熱情的女性健身教練。我擁有多年的運動經驗和專業培訓，致力於幫助女性實現健康和健美的目標。透過定制的運動計劃和營養指導，我希望每位學員都能發現自己的潛力，並在健身旅程中取得驚人的成就！',
  },
  {
    nickname: 'Sonia',
    img: 'sonia.jpg',
    location: 1,
    introduction:
      '大家好！我是Sonia，一位熱愛挑戰的女性健身教練。我的教學風格融合了瑜珈和高強度訓練，致力於提升學生的力量和耐力。透過靜坐冥想和有氧運動，我鼓勵學生們超越舒適區，發現自己的潛力，並達到身心的完美平衡。',
  },
  {
    nickname: 'Sophia',
    img: 'sophia.jpg',
    location: 2,
    introduction:
      '大家好，我是Sophia，一位專業的女性健身教練。我相信健身不僅僅是改變身體，更是改變生活的過程。我以鼓勵和激勵為基礎，幫助我的學員建立強健的身體和積極的心態。我熱愛挑戰和持續學習，致力於與每位學員攜手並肩，實現他們的健康目標。讓我們一起追求健康的生活方式吧！',
  },
  {
    nickname: 'Jessica',
    img: 'jessica.jpg',
    location: 2,
    introduction:
      '大家好，我是Jessica，一位熱愛挑戰的女性健身教練。我專精於皮拉提斯，以強化核心和改善靈活度為主要目標。我的訓練課程結合了高強度的有氧運動和精確的身體控制動作，帶領學員們達到全面的健康與健身效果。讓我們一起追求健康活力的生活吧！',
  },
  {
    nickname: 'Emily',
    img: 'emily.jpg',
    location: 3,
    introduction:
      '嗨！我是Emily，一位充滿活力的女性健身教練。以瑜珈為基礎，我專注於幫助學生提高靈活性和身心平衡。透過動態流動的動作和深呼吸，我帶領學生們體驗身心的和諧，並在愉快的環境中找到內在的力量和自信。',
  },
  {
    nickname: 'Ella',
    img: 'ella.jpg',
    location: 3,
    introduction:
      '嗨，大家好！我是Ella，一位對皮拉提斯熱愛的女性健身教練。我的訓練風格融合了舞蹈的優雅和力量訓練的效果，致力於幫助每個學員改善體態和核心力量。透過我的指導，您將獲得更強健的身體和平衡的心靈。',
  },
  {
    nickname: 'Alex',
    img: 'alex.jpg',
    location: 1,
    introduction:
      '嗨！大家好，我是Alex，一位熱愛健身的男性健身教練。多年來，我致力於幫助男性改善體態，增強肌肉力量和提升身體素質。我相信每個人都有潛力成為最好的自己，因此我將用我的專業知識和經驗，給予你量身定制的訓練計劃和營養建議，幫助你達到你的健身目標。',
  },
  {
    nickname: 'Nick',
    img: 'nick.jpg',
    location: 2,
    introduction:
      '嘿！我是Nick，一位專業的男性健身教練。對於我來說，健身不僅僅是一種運動，更是一種生活方式。我的目標是通過適應性訓練和全面的身體塑造，幫助男性實現健康、強壯和有自信的身體。無論你是新手還是有經驗的健身愛好者，我都會根據你的需求和目標，設計出最有效的鍛煉計劃和營養指導。讓我們一起開始這個令人興奮的健身旅程吧！',
  },
  {
    nickname: 'Eric',
    img: 'eric.jpg',
    location: 3,
    introduction:
      '嗨，大家好！我是Eric，一位專業的健身教練。我在健身界有多年的經驗，特別專精於臥推訓練。我相信每個人都有潛力成為最好的自己，我的目標是幫助你達到健康、強壯的身體。我將結合個人化的訓練計劃、營養指導和持久的動力，讓你實現自己的健身目標。',
  },
  {
    nickname: 'Mark',
    img: 'mark.jpg',
    location: 1,
    introduction:
      '大家好，我是馬克，一位熱衷於健身的男性健身教練。我對於運動科學充滿熱情，並致力於幫助每個人達到他們的最佳狀態。我專注於臥推訓練，因為我相信強健的胸部和上肢肌肉不僅是外表的展示，更是提升整體體能和功能性的關鍵。讓我們一同努力，追尋強壯健康的身體吧！',
  },
  {
    nickname: 'Aaron',
    img: 'aaron.jpg',
    location: 2,
    introduction:
      '嗨！大家好，我是Aaron。專精於健美專項。我相信健身是一種藝術，一種將身體雕塑成完美形狀的方式。我致力於幫助男性客戶通過定制的訓練計劃和營養指導，達到他們的健美目標。與我一起，你將獲得專業知識和個人化的指導，讓我們一起展現你真正的健美潛力！',
  },
  {
    nickname: 'John',
    img: 'john.jpg',
    location: 3,
    introduction:
      '大家好，我是John。作為一位擁有十年經驗的健身教練，我專注於男性健美專項訓練。我相信透過結合科學訓練方法和個性化計劃，可以幫助您達到理想的健美目標。無論您是想增加肌肉質量、降低體脂肪還是塑造完美身材，我都樂意為您提供專業指導和鼓勵。',
  },
  {
    nickname: 'Daidai',
    img: 'daidai.jpg',
    location: 1,
    introduction:
      '嗨，大家好！我是Daidai。擁有健美健體訓練專長，我致力於協助男性達到健康與自信。我相信健身不僅僅是塑造身體，更是改變生活方式的旅程。透過我的專業知識和動力激勵，我將幫助您擁有強壯的體魄、充滿活力的生活。',
  },
  {
    nickname: 'Ray',
    img: 'ray.jpg',
    location: 2,
    introduction:
      '嗨！大家好，我是Ray，一位經驗豐富的男性健身教練。我擁有超過十年的健身指導經驗，專精於各種力量訓練項目。我相信每個人都有潛力超越自己，而我的目標就是幫助您實現最大的健身成就。硬拉是我的拿手項目，透過適當的技巧和訓練，我能幫助您提升力量、改善體態，並達到健康和健美的目標。',
  },
  {
    nickname: 'Daniel',
    img: 'daniel.jpg',
    location: 3,
    introduction:
      '大家好，我是Daniel，一位對健身充滿熱情的健身教練。我在健身界已經有五年的經驗，專精於硬拉項目。我喜歡挑戰自己和我的學生，並幫助他們超越他們的極限。透過我的指導，您將學會正確的姿勢和技巧，並發揮最大的力量潛力。我相信每個人都能通過適當的訓練和承諾達到健康和健壯的身體。',
  },
  {
    nickname: 'Lisa',
    img: 'lisa.jpg',
    location: 1,
    introduction:
      '嗨，大家好，我是教練Lisa。我特別喜歡透過藥球來訓練，這種全身性的訓練能提升核心力量、協調性和心肺耐力。我的課程特別注重動作技巧和動態平衡，讓你全面發展身體素質，並且能夠享受每一次的訓練，同時達成健身目標。',
  },
  {
    nickname: 'Leo',
    img: 'leo.jpg',
    location: 2,
    introduction:
      '哈囉，大家好，我是教練Leo。我專精於壺鈴和藥球的高強度訓練。這種有節奏的運動結合了重量訓練和心肺運動，有效提升肌肉力量和心肺耐力。我的課程強調動作技巧和身體姿勢的正確性，確保你安全又有效地達成目標。讓我們一起迎接挑戰，打造強壯的身體和無比的自信！',
  },
  {
    nickname: 'Avril',
    img: 'avril.jpg',
    location: 1,
    introduction:
      '嗨，大家好！我是Avril，一位充滿熱情的健身教練。我的專長是以機械為主的有氧運動，我相信這是塑造身體和增強心肺功能的絕佳工具。我將用個人化的訓練計劃和技巧，幫助你在使用器材上達到最佳效果，同時享受運動的樂趣！',
  },
  {
    nickname: 'Finn',
    img: 'finn.jpg',
    location: 2,
    introduction:
      '嘿，大家好！我是Finn，一位有多年經驗的健身教練，我對於有氧運動有著極大的熱愛和專業知識。我相信這種運動可以有效地燃燒卡路里、增強核心肌群和提高耐力。讓我幫助你制定具有挑戰性和多樣性的訓練計劃，一起達到健康和健身目標！',
  },
  {
    nickname: 'Dalen',
    img: 'dalen.jpg',
    location: 3,
    introduction:
      '大家好！我是Dalen，一位專注於運動科學的健身教練。在健身項目中，划船機是我推薦的選項之一，因為它同時涉及上半身和下半身的運動，能夠全面訓練你的肌肉群。我將結合科學的方法和有趣的訓練技巧，幫助你在划船機上取得良好的成果，並實現身心的平衡。',
  },
  {
    nickname: 'Kevin',
    img: 'kevin.jpg',
    location: 1,
    introduction:
      '嗨！我是Kevin，一位專業的健身教練。我擁有多年的經驗，致力於幫助人們實現健康生活和強健體魄的目標。我特別擅長個人飲食與訓練的規劃，根據每個人的需求和目標，設計度身定制的計劃。我的獨特方法結合了適當的營養指導和有效的訓練技巧，幫助客戶取得持久的成果。讓我們一起為健康的改變而努力吧！',
  },
  {
    nickname: 'Amy',
    img: 'amy.jpg',
    location: 1,
    introduction:
      '嗨！我是Amy，一位專業的健身教練，並擁有多年訓練經驗。我致力於幫助人們實現健康生活和強健體魄的目標。也會為學員制定個人飲食與訓練的規劃，根據每個人的需求和目標，設計度身定制的計劃，幫助客戶取得持久的成果。讓我們一起為健康的改變而努力吧！',
  },
  {
    nickname: 'Ruby',
    img: 'ruby.jpg',
    location: 2,
    introduction:
      '大家好！我是健身教練Ruby。我對靜態拉伸、肌肉放鬆和運動傷害有著深入的瞭解。透過我個人化的指導，我能夠幫助客戶最大限度地提升靈活性和恢復運動後的肌肉疲勞。我相信預防傷害是健身路上成功的關鍵，讓我們一同鍛煉，健康地達到目標！',
  },
  {
    nickname: 'Wayz',
    img: 'wayz.jpg',
    location: 2,
    introduction:
      '大家好！我是健身教練Wayz。我相信跑步是塑造身體和心靈的最佳方式之一。作為一個長跑專項的健身教練，我致力於幫助人們發現他們的潛力，並實現身體和健康目標。長跑是我的魂經，對我來說，它不僅是一項運動，更是一個心流的體驗，可以挑戰自己的極限並超越它們。讓我們一起體驗長跑的美妙與成就吧！',
  },
  {
    nickname: 'Ava',
    img: 'ava.jpg',
    location: 2,
    introduction:
      '你好！我是Ava，是一位專業的瑜珈教練。我的目標是幫助學員透過瑜珈練習達到身心靈的平衡。我的課程結合了呼吸控制、體位法和冥想，旨在提高靈活性、增強力量和減輕壓力。無論你是初學者還是有經驗的瑜珈愛好者，我都將提供專業的指導，引導你走向更健康的生活。',
  },
];
