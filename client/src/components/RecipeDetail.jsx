import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { recipeDetail } from "../actions";
import style from "./RecipeDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faStar } from "@fortawesome/free-solid-svg-icons";

export default function RecipeDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(recipeDetail(id));
  }, [dispatch, id]);

  const detailedRecipe = useSelector((state) => state.detail);
  console.log(detailedRecipe);

  return (
    <div className={style.component}>
      {detailedRecipe.length > 0 ? (
        <div>
          <h1 className={style.title}>{detailedRecipe[0].name}</h1>
          <div className={style.imgContainer}>
            <img
              src={detailedRecipe[0].image}
              alt="Not found"
              width="500px"
              height="400px"
              className={style.img}
            />
            <h3 className={style.h3img}>
              Score: {detailedRecipe[0].score}{" "}
              <FontAwesomeIcon icon={faStar} size="1x" />{" "}
            </h3>
            <h3 className={style.h3img}>
              Healthy Food level: {detailedRecipe[0].healthScore}{" "}
              <FontAwesomeIcon icon={faSeedling} size="1x" />
            </h3>
          </div>
          <div className={style.detailContainer}>
            <h3 className={style.h3}>Step by step:</h3>
            <p
              className={style.p}
              dangerouslySetInnerHTML={{
                __html: detailedRecipe[0].instructions,
              }}
            ></p>
            <h3 className={style.h3}>Summary:</h3>
            <p
              className={style.p}
              dangerouslySetInnerHTML={{ __html: detailedRecipe[0].summary }}
            ></p>
            <h3 className={style.h3}>Diet types:</h3>
            <ul className={style.p}>
              {detailedRecipe[0].diets.map((d) => (
                <li className={style.li}>{d.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Recipe not found Error 404</p>
      )}
      <div className={style.centerButton}>
      <Link to="/home">
        <button className={style.createButton}>Back</button>
      </Link>
      </div>
    </div>
  );
}
