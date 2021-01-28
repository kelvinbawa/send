import Head from 'next/head';
import { Lock, PlusCircle, ClipboardText, CaretDoubleDown } from "phosphor-react";
import styles from '../styles/Home.module.scss';
import User from '../components/user'
import Details from '../components/details'
import { useResponsive } from 'ahooks';

import { useState } from 'react'

export default function Home() {

	const responsive = useResponsive();

	const [opened, setOpened] = useState(false)

	return (
		<main className={styles.main}>
			<Head>
				<title>Shippi</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />

			</Head>

			{!responsive?.sm && <div className={[styles.order__sheet, opened ? styles.opened : ""].join(" ", ",")}>
				<div className={styles.order__btn} onClick={() => setOpened(!opened)}>
					{!opened ? <ClipboardText size={16} weight="bold" /> : <CaretDoubleDown size={16} weight="bold" />}
					{!opened ? "Order summary" : "Minimize"}</div>

				<div className={[styles.cotet, !opened ? styles.showed : ""].join(" ", ",")}>
					<Details />
				</div>

			</div>}

			<section className={styles.control}>
				<header className={styles.header}>
					<div>
						<img src={'/images/logo.svg'} alt="logo" width={80} />
					</div>
					<User />
				</header>


				<section className={styles.details}>
					<header className={styles.details__header}>
						<h1 className={styles.details__title}>
							Payment details
					</h1>

						<div className={styles.details__info}>
							<div className={styles.details__info__title}>
								<Lock size={18} weight="duotone" /> Card is secure
							</div>
							<p className={styles.details__info__p}>Your data is protected, everything will be private.</p>
						</div>
					</header>

					<nav className={styles.details__menu}>

						<ul>
							<li className={[styles.details__menu__item, styles.details__menu__item__active].join(" ", ",")}>Credit Card</li>
							<li className={styles.details__menu__item}>Paypal</li>
							<li className={styles.details__menu__item}>Others</li>
						</ul>
					</nav>


					<main className={styles.cards__wrap}>
						<ul className={styles.cards__stacks}>
							<li className={styles.o}>
								<div className={styles.card_umber}>**** 4323</div>
							</li>
							<li className={styles.oo}>
								<div className={styles.card_umber}>**** 4323</div>
							</li>
							<li className={styles.ooo}>
								<div className={styles.add}>Add new <PlusCircle size={20} weight="fill" /></div>
							</li>
						</ul>



						<section className={styles.form__stack}>

							<div className={styles.form__control}>
								<span>Credit card</span>
								<input autoComplete="off" type="text" name="card" id="card" defaultValue="4442" placeholder="Card Number" className={styles.master} />
							</div>

							<div className={styles.form__control}>
								<span>Name</span>
								<input autoComplete="off" type="text" name="card" id="name" defaultValue="kelvin bawa" placeholder="FullName" />
							</div>

							<div className={[styles.form__control, styles.split].join(" ", ",")}>
								<div>
									<span>Expiry date</span>
									<input type="number" name="number" id="expire" defaultValue="11 / 2000" placeholder="Expiry" />
								</div>
								<div>
									<span>CVV</span>
									<input type="number" name="number" id="cvv" defaultValue="11 / 2000" placeholder="CVV" />
								</div>
							</div>

							<div className={[styles.form__control, styles.split].join(" ", ",")}>
								<div style={{ marginTop: 22 }}>
									<input type="submit" className={styles.submit} defaultValue="Confirm order" />
								</div>
								<div style={{ marginTop: 22 }}>
									<div className='label'>Cancel and return</div>
								</div>
							</div>
						</section>
					</main>

				</section>

			</section>




			{responsive?.sm && <Details />}

		</main >
	);
}
