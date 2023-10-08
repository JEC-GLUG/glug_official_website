import React from 'react'
import PageLayout from "../Layout/PageLayout";
import { styles } from "../styles";

const AllEvents = ({ setScrolled }) => {
  return (
    <PageLayout setScrolled={setScrolled}>
         <section
      className={`relative w-full mx-auto overflow-hidden text-white flex flex-wrap justify-center items-center ${styles.paddingX} mt-5`}
      style={{ fontFamily: "'Russo One', sans-serif" }}
    >
            <div className="w-full flex items-center justify-center relative mt-52">
                <h1 className={`${styles.headingText}`}>
                    This Page is coming s<span className="text-glugBlue">o</span>
                    oon
                </h1>
            </div>
            </section>
        </PageLayout>
  )
}

export default AllEvents