import React from 'react'
import './experience.css'


function Experience() {


  const professional = ["TensorFlow 你是我的眼導盲應用 科展 精神探究獎",
                      "TensorFlow 你是我的眼導盲應用 科展 高雄市第一名",
                      "TensorFlow 你是我的眼導盲應用 專題 校內佳作",
                    "TensorFlow 你是我的眼導盲應用 科展 校內第二名",
                    "Microsoft Technology Associate- Networking Fundamentals 證照",
                    "丙級電腦軟體應用技術士"]

  const experience = [{
    title: '參與 Google Cloud Platform 開發培訓計劃',
    company: 'GCP',
    date: '2020 - Present',
  },
  {
    title: '參與 Android Developer Kotlin 開發培訓計劃',
    company: 'GDG',
    date: '2019 - 2020'
  },
  {
    title: 'Microsoft Technology Associate Networking Fundamentals 證照',
    company: 'Microsoft',
    date: '2019'
  },
  {
    title: '中華民國商業管理協會 Python程式設計訓練',
    company: '中華民國商業管理協會',
    date: '2019'
  },
  {
    title: '國立高雄科大 扎根高中職資訊科學教育訓練 程式設計',
    company: '國立高雄科大',
    date: '2018'
  }
  ,
  {
    title: '國立高雄科大 扎根高中職資訊科學教育訓練 網頁設計',
    company: '國立高雄科大',
    date: '2018'
  }
]



  return (
    <section className="Experience">
      <div className="Experience--Professional">
        <div className="block">
          <h2 className="DetailsTitle">專業技術</h2>
          <div className="Text">
            前端技術/跨平台應用程式框架/MVC架構/MVVC架構
          </div>
        </div>
        <div className="block">
          <h2 className="DetailsTitle">專業項目</h2>
          <div className="Text">
            <ul>
              {professional.map((item, index) => {
                return (
                  <li className='Item--list' key={index}>
                    <span className="text">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="block">
          <div className="Text">
            前端技術/跨平台應用程式框架/MVC架構/MVVC架構
          </div>
        </div>
      </div>
      <div className="Experience--Professional">
        <div className="block">
          <h2 className="DetailsTitle">相關專業技能研習</h2>
          <div className="TimeLine">
            {experience.map((item, index) => {
              return (
                <div className="TimeLine--Item" key={index}>
                  <div className="aero">
                    <div className="TimeLine--Item--Title">
                      {item.title} <span className='TimeLine--Item--Company'>{item.company}</span>
                    </div>
                    
                    <div className="TimeLine--Item--Date">
                      {item.date}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience