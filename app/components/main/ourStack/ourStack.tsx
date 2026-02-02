import { JSX } from "react";
import { stack } from "./ourStackData";
export default function OurStack(): JSX.Element {
    return (
        <section id="our-stack-section">
            <div className="our-stack">
                <h4>Наш стек</h4>
                <div className="our-stack-points">
                    <div className="line-our-stack"></div>
                    {
                        stack.map((st, index) => {
                            return (
                                <div className="stack-card" key={st.id}>
                                    <h6>{st.id}</h6>
                                    <h5>{st.tecn}</h5>
                                    <span>{st.description}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}