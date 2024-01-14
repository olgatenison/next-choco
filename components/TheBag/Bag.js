import React, { useContext, useState } from "react";
import { validateEmail } from "../../services/validation";

const Bag = ({ value, clearOne }) => {
  // Сортировка товаров по имени в алфавитном порядке
  const sortedItems = value
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  // Рассчет общей суммы
  const totalAmount = sortedItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  // Состояние для email
  const [email, setEmail] = useState("");
  // Состояние для сообщения об ошибке валидации email
  const [emailError, setEmailError] = useState("");

  // Обработчик изменения значения в поле email
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Проверка валидности email и установка соответствующего сообщения об ошибке
    if (!validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <>
      {/* basket */}

      <div className="basket" style={{ color: "black" }}>
        <h2>
          Bag:<span>{value.length}</span>
        </h2>
        <ul className="basket__list">
          {sortedItems.map((item, index) => (
            <li key={index} className="basket__item">
              {item.name}
              <div className="basket__wrap">
                <span className="basket__price">{item.price} €</span>
                <div onClick={() => clearOne(index)} className="basket__cross">
                  X
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Выводим Total, если в корзине есть товары */}
        {sortedItems.length > 0 && (
          <div className="total">
            <p>Total: {totalAmount.toFixed(2)} €</p>
            <p className="bag__slogan">
              We’re delighted that you’ve chosen us!{" "}
              <span>
                Please enter your email, and we’ll send you all the details of
                your order.
              </span>
              <br /> Thank you for making a purchase with Loretta’s Choco. We
              assure you that every chocolate experience will be unforgettable!
            </p>

            <div className="form">
              <div className="form__wrapper">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  className="form__btn"
                  type="submit"
                  disabled={!validateEmail(email)}
                >
                  Subscribe
                </button>
              </div>
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
          </div>
        )}
      </div>

      {/* basket */}

      <div className="bag__wrapper">
        <ul className="bag__list"></ul>
      </div>
    </>
  );
};

export default Bag;
