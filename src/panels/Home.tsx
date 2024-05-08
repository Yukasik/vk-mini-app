import { useState } from 'react';
import './Home.css'
import { Panel, Div, SplitLayout, Group, CellButton, Tabbar} from '@vkontakte/vkui';
import { kindKittyes } from '../data/dataKind';
import { neutralKittyes } from '../data/dataNeutral';
import { sadKittyes } from '../data/dataSad';
import Title from '../img/1.svg'
import KittyHome from './KittyHome.mp4'
import Kitty from '../img/kitty.png'
import Modal from '../components/modal';
import Good from '../img/good.png'
import Neutral from '../img/neutral.png'
import Sad from '../img/sad.png'


const Home = ({ id }: any) => {
	const [homeKitty, setHomeKitty] = useState<boolean>(true) 
	const [kindKitty, setKindKitty] = useState<any>('')
	const [neutralKitty, setNeutralKitty] = useState<any>('')
	const [sadKitty, setSadKitty] = useState<any>('')
	const [question, setQuestion] = useState<boolean>(true)

	const changeKitty = () => {
		setHomeKitty(!homeKitty)
	}

	const kindKittyСlick = () => {
		const randomKindKitty = Math.floor(Math.random() * kindKittyes.length);
		setKindKitty(kindKittyes[randomKindKitty])
	}

	const neutralKittyСlick = () => {
		const randomNeutralKitty = Math.floor(Math.random() * neutralKittyes.length);
		setNeutralKitty(neutralKittyes[randomNeutralKitty])
	}

	const sadKittyСlick = () => {
		const randomSadKitty = Math.floor(Math.random() * sadKittyes.length);
		setSadKitty(sadKittyes[randomSadKitty])
	}

	const noKitty = () => {
		setKindKitty('')
		setNeutralKitty('')
		setSadKitty('')
	}

	const changeQuestion = () => {
		setQuestion(!question)
	}

	const [popout, setPopout] = useState<any>(null);

    const setModal = () => setPopout(<Modal onClose={() => setPopout(null)} />);
	return(
		<Panel id={id}> 
			<div className='home'>
				<img src={Title} alt="Какой ты котик сегодня?" className='title' data-aos="zoom-in" data-aos-offset='200' data-aos-duration='400'/>
				{homeKitty ? (
					<video 
					src={KittyHome}
					autoPlay
              		playsInline
              		loop={true}
              		muted={true}
              		preload="auto"
					className='kittyHome'
					data-aos="zoom-in" data-aos-delay='300' data-aos-duration='400'
					></video>
				) : (
					<Div></Div>
				)}
					{kindKitty && (
						<Div className='kitty'>
							<img src={kindKitty.image} alt="" className='img-kitty' data-aos="zoom-in"/>
							<p className='desc-kitty' data-aos="zoom-in">Ты сегодня<br /> 
							{kindKitty.firstname}!</p>	
						</Div>)
					}
					{neutralKitty && (
						<Div className='kitty'>
							<img src={neutralKitty.image} alt="" className='img-kitty' data-aos="zoom-in"/>
							<p className='desc-kitty' data-aos="zoom-in">Ты сегодня<br />
							{neutralKitty.firstname}!</p>	
						</Div>)
					}
					{sadKitty && (
						<Div className='kitty'>
							<img src={sadKitty.image} alt="" className='img-kitty' data-aos="zoom-in"/>
							<p className='desc-kitty' data-aos="zoom-in">Ты сегодня<br />
							{sadKitty.firstname}!</p>	
						</Div>)
					}	
				{question ? (
					<Div className='question'>
						<p className='question-text-title' data-aos="zoom-in" data-aos-delay='400' data-aos-duration='400' data-aos-once='true'>
							Как твое настроение?
						</p>
						<p className='question-text-desc' data-aos="zoom-in" data-aos-delay='400' data-aos-duration='400' data-aos-once='true'>
						&#40;подберем котика на основе твоего ответа&#41;
						</p>
						<Div className='question-buttons'>
							<button onClick={() => {changeKitty(), kindKittyСlick(), changeQuestion()}} data-aos="fade-right" data-aos-delay='550' data-aos-duration='400' data-aos-once='true'>
								Хорошо
							</button>
							<button onClick={() => {changeKitty(), neutralKittyСlick(), changeQuestion()}} data-aos="zoom-in" data-aos-delay='500' data-aos-duration='400' data-aos-once='true'>
								Обычно
							</button>
							<button onClick={() => {changeKitty(), sadKittyСlick(), changeQuestion()}} data-aos="fade-left" data-aos-delay='550' data-aos-duration='400' data-aos-once='true'>
								Плохо
							</button>
						</Div>
						<SplitLayout popout={popout} className='popout'>
							<Group id="popout">
								<img src={Kitty} alt="пасхалка" className='trick-img' onClick={setModal} data-aos="zoom-in" data-aos-delay='600' data-aos-duration='400' data-aos-once='true'/>
							</Group>
                		</SplitLayout>
					</Div>
				) : (
					<button onClick={() => {changeKitty(), noKitty(), changeQuestion()}} className='back' data-aos="flip-left" data-aos-delay='200'>Заново</button>
				)}
			</div>
		</Panel>
	)

}

export default Home;
