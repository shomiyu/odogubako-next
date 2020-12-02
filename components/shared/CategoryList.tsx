import React from "react";
import style from "./CategoryList.module.scss";
import Link from "next/link";
import { MENU } from "../../utils/constantUtils";

const CategoryList: React.FC = () => {
  return (
    <>
      {MENU.map((category) => (
        <section key={category.id} className="section">
          <div className="container">
            <h2 className="titlePrimary">
              {category.id}
              <small className="titlePrimary__ja">{category.title}</small>
            </h2>
            <ul className={style.menu}>
              {category.children.map((item, index) => (
                <li key={index}>
                  <Link href={`/${category.path}/${item.path}`}>
                    <a>
                      <section className={style.menu__item}>
                        <h3 className={style.menu__title}>
                          {item.path}
                          <span className={style.menu__titleSub}>
                            {item.title}
                          </span>
                        </h3>
                        <figure className={style.menu__icon}>
                          <img src={item.icon} alt={item.title} />
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
