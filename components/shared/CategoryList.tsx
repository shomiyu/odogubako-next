import React from "react";
import style from "./CategoryList.module.scss";
import Link from "next/link";
import MENU from "../../utils/MenuData";

const CategoryList: React.FC = () => {
  return (
    <>
      {MENU.map((item) => (
        <section key={item.id} className="section">
          <div className="container">
            <h2 className="titlePrimary">
              {item.path}
              <small className="titlePrimary__ja">{item.title}</small>
            </h2>
            <ul className={style.menu}>
              {item.children.map((child, index) => (
                <li key={index}>
                  <Link href={{ pathname: child.path }}>
                    <a>
                      <section className={style.menu__item}>
                        <h3 className={style.menu__title}>
                          {child.path}
                          <span className={style.menu__titleSub}>
                            {child.title}
                          </span>
                        </h3>
                        <figure className={style.menu__icon}>
                          <img src={child.icon} alt={child.title} />
                        </figure>
                      </section>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};

export default CategoryList;
