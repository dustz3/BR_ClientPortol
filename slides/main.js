import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import './style.css';
import logoUrl from './assets/brandrize-logo.svg';
import serviceImg from './assets/service.jpg';

const slidesData = [
  {
    type: 'cover',
    title: '峻程科技<br /><span class="cover-title-secondary">網站 SEO 維運現況簡報</span>',
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
    title: '關鍵字行銷在服務中的角色定位',
    sections: [
      {
        heading: '在現行服務結構中的定位',
        bullets: [
          '屬於基礎型 SEO 與搜尋結構維運',
          '著重於關鍵字設定、配置與排名追蹤',
          '主要目標為維持搜尋能見度與結構穩定',
        ],
      },
      {
        heading: '角色理解',
        bullets: ['作為網站營運的基礎支撐層', '非短期成效或行銷成長導向'],
      },
    ],
  },
  {
    title: '現行 SEO 服務的操作層級',
    sections: [
      {
        heading: '目前可觀察到的主要操作層級',
        bullets: [
          '關鍵字設定與基礎配置',
          'On-page SEO 與技術結構調整',
          '關鍵字排名追蹤與狀態回報',
          '網站與主機環境的日常維運',
        ],
      },
      {
        heading: '操作特性說明',
        bullets: ['以設定、維護與追蹤為主要工作型態', '著重於既有架構的穩定運作'],
      },
    ],
  },
  {
    title: '既有操作模式下的常見結果',
    sections: [
      {
        heading: '在目前操作層級下，通常會出現的情況',
        bullets: [
          '搜尋排名以維持現況為主',
          '排名變動多作狀態觀察與紀錄',
          '關鍵字調整未必立刻帶動成效',
          '搜尋能見度變化通常緩慢穩定',
        ],
      },
      {
        heading: '理解重點',
        bullets: ['此類結果與操作層級高度相關', '若期待不同結果，通常需搭配不同層級的規劃'],
      },
    ],
  },
  {
    title: '決策思考與判斷方向',
    sections: [
      {
        heading: '在既有 SEO 基礎下，可進一步評估的關鍵問題',
        bullets: [
          '目前的 SEO 投入，是否已足以支撐公司現階段的業務目標？',
          '目前追蹤的關鍵字與排名變化，是否對實際決策產生影響？',
          '若維持現行操作層級，是否符合對搜尋能見度的期待？',
        ],
      },
      {
        heading: '決策層思考方向',
        bullets: ['維持現行操作層級，作為穩定基礎', '或評估是否需要調整投入層級與策略方向'],
      },
    ],
  },
  {
    title: '會議決議與後續方向',
    sections: [
      {
        heading: '本次會議可先行確認的事項',
        bullets: [
          '目前的 SEO 操作層級，是否符合公司現階段的需求與目標？',
          '現行服務定位，是否作為「穩定基礎」持續維持？',
          '是否需要進一步評估不同投入層級或策略選項？',
        ],
      },
      {
        heading: '會議後續行動方向（擇一或多項）',
        bullets: [
          '維持現行操作模式，定期檢視其適切性',
          '進一步盤點內部期待與可投入資源',
          '另行安排討論，評估調整方向與時程',
        ],
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
          <div class="content-block${type === 'note' ? ' note' : ''}${type === 'plain' ? ' plain' : ''}">
            <p class="block-heading">${heading}</p>
            ${
              type === 'plain' && text
                ? `<p class="block-text">${text}</p>`
                : `<ul>${bullets.map((item) => `<li>${item}</li>`).join('')}</ul>`
            }
          </div>
        `,
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
