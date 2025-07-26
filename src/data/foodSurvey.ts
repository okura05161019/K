import { Survey } from '../types/survey';

export const universityFoodSurvey: Survey = {
  id: 'university-food-survey-2024',
  title: '大学生の好きな食べ物アンケート',
  description: '様々なキャンパスの大学生の食べ物の好みや食習慣について理解するためのアンケートです。',
  questions: [
    {
      id: 'personal-info',
      type: 'text',
      question: 'お名前を教えてください',
      required: true
    },
    {
      id: 'university',
      type: 'select',
      question: 'どちらの大学に通っていますか？',
      options: [
        '東京大学',
        '京都大学',
        '大阪大学',
        '早稲田大学',
        '慶應義塾大学',
        '東京工業大学',
        '一橋大学',
        '筑波大学',
        '神戸大学',
        '九州大学',
        '北海道大学',
        '東北大学',
        '名古屋大学',
        'その他'
      ],
      required: true
    },
    {
      id: 'major',
      type: 'text',
      question: '専攻は何ですか？',
      required: true
    },
    {
      id: 'year',
      type: 'radio',
      question: '何年生ですか？',
      options: ['1年生', '2年生', '3年生', '4年生', '大学院生'],
      required: true
    },
    {
      id: 'favorite-food',
      type: 'text',
      question: '好きな食べ物は何ですか？',
      required: true
    },
    {
      id: 'food-category',
      type: 'select',
      question: 'あなたの好きな食べ物はどのカテゴリーに当てはまりますか？',
      options: [
        'ファストフード',
        'アジア料理',
        'イタリア料理',
        'メキシコ料理',
        'アメリカ料理',
        '地中海料理',
        'インド料理',
        'その他'
      ],
      required: true
    },
    {
      id: 'dietary-restrictions',
      type: 'multiselect',
      question: '食事制限はありますか？（該当するものをすべて選択してください）',
      options: [
        'なし',
        'ベジタリアン',
        'ビーガン',
        'グルテンフリー',
        '乳製品不使用',
        'ナッツアレルギー',
        'ハラール',
        'コーシャー',
        'その他'
      ],
      required: false
    },
    {
      id: 'budget-range',
      type: 'radio',
      question: '1回の食事の予算はいくらですか？',
      options: ['500円以下', '500-1000円', '1000-1500円', '1500円以上'],
      required: true
    },
    {
      id: 'eating-frequency',
      type: 'radio',
      question: '好きな食べ物をどのくらいの頻度で食べますか？',
      options: ['毎日', '週に数回', '月に数回', 'たまに'],
      required: true
    },
    {
      id: 'campus-dining',
      type: 'radio',
      question: '学食の満足度はいかがですか？',
      options: ['とても満足', '満足', 'どちらでもない', '不満', 'とても不満'],
      required: true
    }
  ],
  responses: [],
  createdAt: new Date('2024-01-01')
};