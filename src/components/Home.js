import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <article>
            <header>
              <h2 style={{textAlign: "center", fontFamily: "'Ubuntu', sans-serif", color: "#623F7F", fontWeight: "bold"}}>About</h2>
            </header>
              <p style={{paddingLeft: "10px", paddingRight: "20px", fontFamily: "'Roboto', sans-serif",}}>
                According to the 2013 National School Climate Survey, fewer than
                five percent of LGBT students had health classes with positive
                representations of LGBTQA+-related topics. Things did not change
                over the years. According to the 2015 Millennials, Sexuality,
                and Reproductive Health Survey, only 12 percent said their sex
                education classes covered same-sex relationships. People who
                identified themselves as LGBTQA+, especially youth, have limited
                or even no access to sex education materials, whether in
                classrooms, from family members, or in their social circles.
                <br></br><br></br>Many LGBTQA+ people don’t feel comfortable talking about sex,
                sexual health, and sexual experiences with others. Therefore, we
                decided to build an website that provides LGBTQA+ inclusive sex
                education resources to help resolve this public health and
                social justice issue. Our website aims to fill this gap by
                helping the LGBTQA+ community to learn more about sex, sexual
                orientation and gender identity. Users will be able to use the
                website to test their level of knowledge of the subject matter,
                find relevant education information, customize calendars to
                track sexual activities, set reminders for taking pills or
                shots, and ask questions for medical options. While the primary
                target users are people who are part of the LGBTQA+ community,
                we are open to extending features to straight identifying
                allies.
              </p>
          </article>
          <article>
              <div>
                <img
                  src="./img/infinity.png"
                  alt="Infinity Rainbow Sign"
                  width="600"
                ></img>
              </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Home;
