/*9-1.
Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір 
шрифту 35px.
*/
const $headings = $("h2.head");
$headings.css("background-color", "green");
$headings.find(".inner").css("font-size", "35px");


/*9-2. На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, 
потрібно додати посиланню атрибут target="_blank".*/

$("a[href^='https://']").attr("target", "_blank");


/*9-3. 
Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент 
так, щоб він став безпосередньо над <h3>.*/
$("h3").each(function () {
    const nextDiv = $(this).next("div");
    if (nextDiv.length > 0) {
        $(this).before(nextDiv);
    }
});


/*9-4. На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач
позначив будь-які 3 чекбокси, всі чекбокси робить неактивними. */
const $checkboxes = $(".myCheckbox");
$checkboxes.on("change", function () {
    const ourCount = $checkboxes.filter(":checked").length;
    if (ourCount >= 3) {
        $checkboxes.prop("disabled", true);
    }
});