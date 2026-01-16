import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import './style.css';
import logoUrl from './assets/brandrize-logo.svg';
import serviceImg from './assets/service.jpg';

const slidesData = [
  {
    type: 'cover',
    title:
      '峻程科技<br /><span class="cover-title-secondary">網站 SEO 維運現況簡報</span>',
    subtitle: '品耀數位行銷｜讓品牌發光，價值躍升',
    presenter: '報告人：Aaron, Aries',
    logo: logoUrl,
  },
  {
    title: '現行服務內容的整體結構',
    image: serviceImg,
    sections: [
      {
        heading: '目前使用中的服務內容，可明確分為兩個層級：',
        type: 'plain',
        text: `一、關鍵字行銷（SEO）相關作業<br />二、網站與主機的日常維護管理`,
      },
      {
        heading: '重點：',
        bullets: [
          'SEO 著重搜尋結構與關鍵字配置',
          '主機維護作為網站穩定運作的基礎支撐',
        ],
      },
    ],
  },
  {
    title: '關鍵字行銷的角色定位',
    sections: [
      {
        heading: '在整體服務中，SEO 扮演基礎維運角色：',
        bullets: [
          '關鍵字設定與基本配置',
          '排名狀態的持續追蹤',
          '搜尋結構的穩定維持',
        ],
      },
      {
        heading: '目標導向',
        bullets: ['非短期成效或行銷成長導向', '以穩定為目標'],
      },
    ],
  },
  {
    title: '現行 SEO 的操作層級',
    sections: [
      {
        heading: '目前實際執行的工作，集中於以下層級：',
        bullets: [
          '關鍵字設定與 On-page SEO',
          '技術結構與基礎環境維護',
          '排名追蹤與狀態回報',
        ],
      },
      {
        heading: '目標',
        type: 'plain',
        text: `維持既有架構正常運作`,
      },
    ],
  },
  {
    title: '既有操作下的結果樣態',
    sections: [
      {
        heading: '在目前操作層級下，常見的搜尋表現為：',
        bullets: [
          '排名大致維持既有位置',
          '變動多作為狀態觀察',
          '能見度成長幅度有限',
        ],
      },
      {
        heading: '結果：',
        type: 'plain',
        text: `結果與投入層級呈現高度對應`,
      },
    ],
  },
  {
    title: '服務使用邊界與理解',
    sections: [
      {
        heading: '在理解既有 SEO 維運服務時，需一併釐清：',
        bullets: [
          '此類服務通常不承諾特定排名或流量成效',
          '關鍵字調整本身，未必直接帶來搜尋成長',
          '能排名報表多為狀態回報，未必包含策略建議',
        ],
      },
      {
        heading: '提醒：',
        type: 'plain',
        text: `若要成長，必須另增策略層投入；否則只能接受「維持不退」的合理結果。`,
      },
    ],
  },
  {
    title: '決策思考',
    sections: [
      {
        heading: '在既有 SEO 基礎下，可進一步思考：',
        bullets: [
          '目前投入是否符合階段性目標？',
          '排名追蹤是否實際支援決策？',
          '是否需要不同層級的策略投入？',
        ],
      },
      {
        heading: '重點：',
        type: 'plain',
        text: `核心在於「定位選擇」`,
      },
    ],
  },
  {
    title: '決議與後續方向',
    sections: [
      {
        heading: '本次會議可先確認：',
        bullets: [
          '是否維持現行操作層級？',
          '是否作為穩定基礎持續運作？',
          '是否另行評估調整可能性？',
        ],
      },
      {
        heading: '後續：',
        type: 'plain',
        text: `可依決議安排下一步討論`,
      },
    ],
  },
  {
    type: 'closing',
    title: '感謝您的時間與指教',
    subtitle: '品耀數位行銷　敬上',
  },
];

const slidesContainer = document.querySelector('.slides');

slidesContainer.innerHTML = slidesData
  .map((slide) => {
    if (slide.type === 'cover') {
      const { title, subtitle, presenter, logo } = slide;
      return `
        <section class="cover-slide">
          <div class="cover-content">
            <img class="cover-logo" src="${logo}" alt="品耀數位行銷 Logo" />
            <h1>${title}</h1>
            <p class="cover-subtitle">${subtitle}</p>
            <p class="cover-presenter">${presenter}</p>
          </div>
        </section>
      `;
    }

    if (slide.type === 'closing') {
      const { title, subtitle } = slide;
      return `
        <section class="closing-slide">
          <div class="closing-content">
            <h2 class="closing-title">${title}</h2>
            <p class="closing-subtitle">${subtitle}</p>
          </div>
        </section>
      `;
    }

    const { title, sections, image } = slide;
    const blocks = sections
      .map(
        ({ heading, bullets, type, text }) => `
          <div class="content-block${type === 'note' ? ' note' : ''}${
          type === 'plain' ? ' plain' : ''
        }">
            <p class="block-heading">${heading}</p>
            ${
              type === 'plain' && text
                ? `<p class="block-text">${text}</p>`
                : `<ul>${bullets
                    .map((item) => `<li>${item}</li>`)
                    .join('')}</ul>`
            }
          </div>
        `
      )
      .join('');

    if (image) {
      return `
        <section class="slide-with-image">
          <h2>${title}</h2>
          <div class="slide-content">
            <div class="slide-body">
              ${blocks}
            </div>
            <div class="slide-media">
              <img class="slide-image" src="${image}" alt="服務內容示意" />
            </div>
          </div>
        </section>
      `;
    }

    return `
      <section>
        <h2>${title}</h2>
        ${blocks}
      </section>
    `;
  })
  .join('');

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: false,
  slideNumber: 'c/t',
  navigationMode: 'default',
  transition: 'none',
});

deck.initialize();
