import React, { Component } from "react";
import styles from "./GlossaryStyles";

class Glossary extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      return (
          <div>
                <div style={styles.header}>Glossary</div>
                <div style={styles.intro} class="introduction">This glossary is included as a resource. We recognize that it is limited in scope, in particular to Western terms. These definitions are mutable and vary between individuals – people may use different identifiers for themselves, or identify with a term for different reasons. We urge readers to ask and apply the language an individual uses to describe themselves.</div>

                <div style={styles.term}> aromanticism </div>
                <div style={styles.termDes}> A lack of romantic attraction. </div> 

                <div style={styles.term}> asexuality </div>
                <div style={styles.termDes}> A lack of sexual attraction. The term is sometimes used as an umbrella term for a variety of asexual identities, such as greysexual and demisexual, as well as for aromanticism. </div> 

                <div style={styles.term}> bisexual </div>
                <div style={styles.termDes}>  Traditionally defined as someone who experiences attraction to men and women, but is also used today to describe people who experience attraction to two or more genders. </div> 

                <div style={styles.term}> cis person </div>
                <div style={styles.termDes}> Someone who presents as, lives as, and identifies with the gender they were assigned at birth. </div> 

                <div style={styles.term}> cissexism </div>
                <div style={styles.termDes}> The system that perpetuates the idea that cis people are the ‘norm,’ and that a person’s assigned-at-birth gender is always their ‘real’ gender. It includes the belief that people who are not cis are less valid, less valuable, or lying. Saying that a trans woman is “really a man” is an example of cissexism. </div> 

                <div style={styles.term}> demisexual </div>
                <div style={styles.termDes}> A person who experiences sexual attraction only after having formed a strong personal bond. </div> 

                <div style={styles.term}> gender </div>
                <div style={styles.termDes}> The social construction of concepts like femininity and masculinity, which includes gender designation at birth, gendered expectations and perceptions, and identity. It differs across cultures, communities, and times. A person’s gender is self-defined, may be fluid, and is independent of birth assignation, sexual characteristics, and romantic and sexual orientation. </div> 

                <div style={styles.term}> genderfluid </div>
                <div style={styles.termDes}> A gender that is not fixed and may shift over time through or between different identities. </div> 

                <div style={styles.term}> greysexual </div>
                <div style={styles.termDes}> A person who rarely experiences sexual attraction. This identity is located on a spectrum between asexuality and sexuality.</div> 

                <div style={styles.term}> heteronormativity </div>
                <div style={styles.termDes}> The system that perpetuates the idea that there is a specific ‘normal’ relationship between gender, sex, and sexuality; that this relationship always or usually manifests itself in individuals via cisgender identity, normative gender expression, and heterosexuality; and that it is essential to the proper functioning of society. Heteronormativity makes the false assumption that everyone is either heterosexual or ‘abnormal.’</div> 

                <div style={styles.term}> non-binary </div>
                <div style={styles.termDes}> A gender other than man or woman. This can mean an identity between man and woman, a mix of the two, or one completely separate from both. A non-binary person may or may not identify as trans. </div> 

                <div style={styles.term}> pansexual </div>
                <div style={styles.termDes}> A person who experiences sexual attraction to people regardless of their gender. </div> 

                <div style={styles.term}> queer </div>
                <div style={styles.termDes}> An explicitly political term that was re-appropriated in the 1990s in order to combat violence against non-normative people. It is self-identified, meaning that only those who describe themselves as queer are queer. Although typically understood to mean individuals who experience non-heterosexual attraction (either in addition to or instead of heterosexual attraction), the term can be used to describe a variety of sexual experiences and preferences, such as pansexuality, asexuality, aromanticism, et cetera. However, someone who belongs to one of these categories will not necessarily identify as queer. Though many people of colour do identify as queer, the use of the term is often criticized for whitewashing the experiences of people of colour and excluding them. </div> 

                <div style={styles.term}> sex </div>
                <div style={styles.termDes}> A medical term designating a certain combination of gonads, chromosomes, external sex organs, secondary sex characteristics, and hormonal balance. Sex is often simplified into categories of male and female, and sometimes intersex. These are arbitrary, socially constructed categories; for example, two people identified by the medical community as female could still have drastically different hormone levels. </div> 

                <div style={styles.term}> trans person </div>
                <div style={styles.termDes}> Someone who presents as, lives as, and/or identifies with one or more genders other than the one they were assigned at birth. </div>         
        </div>
      );
    }
}

  export default Glossary;