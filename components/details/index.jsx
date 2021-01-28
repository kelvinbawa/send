import styles from './details.module.scss'
import { ShoppingCart, CreditCard, Swatches } from "phosphor-react";

function index(props) {
  const size = 18
  return (
    <section className={styles.details}>
      <h1 className={styles.details__title}>Order summary</h1>

      <ul className={styles.steps}>
        <li className={styles.steps__item}>
          <div className={[styles.steps__icon, styles.o].join(" ", ",")}>
            <ShoppingCart size={size} weight="duotone" />
          </div>
          <div className={styles.steps__detail}>
            <span>Step 1</span>
            Shipping
          </div>
        </li>
        <li className={styles.steps__item}>
          <div className={[styles.steps__icon, styles.oo].join(" ", ",")}>
            <CreditCard size={size} weight="duotone" />
          </div>
          <div className={styles.steps__detail}>
            <span>Step 2</span>
            Payment
          </div>
        </li>
        <li className={styles.steps__item}>
          <div className={[styles.steps__icon, styles.ooo].join(" ", ",")}>
            <Swatches size={size} weight="duotone" />
          </div>
          <div className={styles.steps__detail}>
            <span>Step 3</span>
            Review
          </div>
        </li>
      </ul>



      <div className={styles.bar}>
        <span>Prada</span>
        <div>
          <img src="/images/chevron-down-outline.svg" alt="" />
        </div>
      </div>

      <div className={styles.bar}>
        <span>Nike</span>
        <div>
          <img src="/images/chevron-down-outline.svg" alt="" />
        </div>
      </div>

      <ul className={styles.items}>
        <li className={styles.items__list}>
          <span>Leather mini bag</span>
          <div>
            &#8358;23,123.00
        </div>
        </li>

        <li className={styles.items__list}>
          <span>Estimated shipping</span>
          <div>
            &#8358;2,023.00
        </div>
        </li>

        <li className={styles.items__list}>
          <span>Discout</span>
          <div>
            &#8358;00.00
        </div>
        </li>
      </ul>


      <div className={styles.bar}>
        <span>Chanel</span>
        <div>
          <img src="/images/chevron-down-outline.svg" alt="" />
        </div>
      </div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <div>
          &#8358;232,023.00
        </div>
      </div>
    </section>
  );
}

export default index;