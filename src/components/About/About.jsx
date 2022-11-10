import React from 'react'
import './about.css'

import NYUST from '../../assets/nyust.png'

export default function About() {

  const slogan = ["猫はエンジニアにとって欠かせない心の友", "猫是工程師不可或缺的精神良伴", "Cats are indispensable spiritual companions for engineers"]
  const [sloganIndex, setSloganIndex] = React.useState(0)

  return (
    <section className="About">
      <div className="About--Profile">
        <img src="https://scontent.frmq2-2.fna.fbcdn.net/v/t1.6435-9/123136908_170188244732123_1634315602398268329_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TxHMC2FC6W0AX_q2ct3&tn=wfIykJdd3abDQbvB&_nc_ht=scontent.frmq2-2.fna&oh=00_AfBBuvdKMNaHJjteVVpYfy0INWqvecoE4O-u3aI52t18qA&oe=63927A51" alt="Profile" />
        <h2 className='About--Name'>陳德生</h2>
        <h2 className='About--SubName'>KoukeNeko</h2>
      </div>
      <div className="Profile--Details">
        <h2 className='About--DetailsTitle'>ABOUT ME</h2>
        <div className="About--Text">
          <p>
            我來自美麗的國際港都高雄市，高中開始接觸資訊領域，雖然時間不長，但仍然持續嘗試各種技術。目前就讀國立雲林科技大學資訊工程學系，目前朝著研究所方向努力中。
          </p>
        </div>
        <div className="About--Social">
          {/* github */}
          <a href="https://github.com/KoukeNeko" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
          {/* Discord */}
          <a href="https://discord.com/users/71000000000000000" target="_blank" rel="noreferrer"><ion-icon name="logo-discord"></ion-icon></a>
          {/* Reddit */}
          <a href="https://www.reddit.com/user/KoukeNeko" target="_blank" rel="noreferrer"><ion-icon name="logo-reddit"></ion-icon></a>
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100052228449366" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
        </div>
        <span className='Nekooo' alt="" 
        style={{
          transition: 'all 0.5s ease',
        }}
        onMouseEnter={() => {
          setSloganIndex((sloganIndex + 1) % slogan.length)
        }}>{slogan[sloganIndex]}</span>
      </div>
      <img className="NYUST--Img" src={NYUST} alt="NYUST" />
    </section>
  )
}
