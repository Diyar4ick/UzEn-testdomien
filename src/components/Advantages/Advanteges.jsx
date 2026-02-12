import cubes from "../../assets/images/generalIcons/cubes.png";
import boxes from "../../assets/images/generalIcons/boxes.svg";
import person from "../../assets/images/generalIcons/person.png";
import newspaper from "../../assets/images/generalIcons/newspaper.png";


const Advanteges = () => {
  return (
    <div className="adv-page">
      <section className="adv-page__section1">
        <div className="container">
          <div className="adv-page__section1-title">
            <h2>Почему выбирают нас?</h2>
          </div>
          <div className="adv-page__section1-reasons">
            <div className="adv-page__section1-reason">
              <span>1</span>
              <p>Большой опыт и успешные проекты</p>
            </div>
            <div className="adv-page__section1-reason">
              <span>2</span>
              <p>Квалифицированная команда инженеро</p>
            </div> 
            <div className="adv-page__section1-reason">
              <span>3</span>
              <p>Передовые технологии</p>
            </div>
            <div className="adv-page__section1-reason">
              <span>4</span>
              <p>
                Полный цикл проектных услуг — от концепции и
                технико-экономического обоснования до детальной документации и
                авторского надзора.
              </p>
            </div>
            <div className="adv-page__section1-reason">
              <span>5</span>
              <p>
                Индивидуальные и экономически эффективные решения для клиентов
              </p>
            </div>
            <div className="adv-page__section1-reason">
              <span>6</span>
              <p>Гарантированное качество и надежность</p>
            </div>
          </div>
        </div>
      </section>
      <section className="adv-page__section2">
        <div className="container">
          <h3 className="adv-page__section2-title">НАШИ ПРЕИМУЩЕСТВА</h3>
          <div className="adv-page__section2-content">
            <div className="adv-page__section2-card">
              <img src={cubes} alt="" />
              <div className="">
                <h4>Проект с учетом современных технологий строительства</h4>
                <p>
                  Проекты сделанные нашей командой специалистов позволяет
                  сократить время строительства, за счет использования
                  современных способ монтажа, материалов и технологий,
                  используемые материалы доступны по стоимости и имеются в
                  свободной продаже.{" "}
                </p>
              </div>
            </div>
            <div className="adv-page__section2-card">
              <img src={boxes} alt="" />
              <div className="">
                <h4>Комплексный подход к проектированию</h4>
                <p>
                  Наша компании готова предложить весь комплекс услуг в области проектирования. Клиентам, обратившимся к нам, не приходится искать различных узких специалистов. В нашей компетенции решить весь спектр задач и подготовить все комплекты проектно-сметной документации.
                </p>
              </div>
            </div>
            <div className="adv-page__section2-card">
              <img src={person} alt="" />
              <div className="">
                <h4>Квалифицированные инженеры проектировщики</h4>
                <p>
                  Большой опыт специалистов, представленых группой компании АО «Узэнергоинжиниринг», имеют высокую квалификацию, имеют все необходимые разрешения и лицензии на проектную деятельность.
                </p>
              </div>
            </div>
            <div className="adv-page__section2-card">
              <img src={newspaper} alt="" />
              <div className="">
                <h4>Кратчайшие сроки проектирования</h4>
                <p>
                  В нашей компании используется современное программное обеспечение, что позволяет сократить сроки проектирования в несколько раз. Наша задача — максимально быстро выдать проектно-сметной документации, что позволяет не переносить сроки строительства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advanteges;
