import styles from "./MealsSummary.module.css";
function MealSummary(props){
    return (
        <section className={`${styles.summary}`}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Chooe Your fav meal from our brand selection of available meals 
                and enjoy a delicious lunch or dinner at home 
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </section>
    )
}


export default MealSummary;