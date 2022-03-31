import React from "react";
import styles from "./EventsPage.module.css";

export default function EventsList(props) {
  // console.log(props.eventDetail,"eventDetail")
  return (
    <>
      <div className={styles.eventList}>
        <div className={styles.eventHead}>{props.eventHead}</div>
        {props.eventDetail.data && props.eventDetail.data.map((eventList , index) => {
          return (
              <div key={eventList} className={styles.eachEvent}>
                <div className={styles.eachEventTitle}>
                  {props.eventDetail.data[index].eventName}
                </div>
                <div className={styles.eachEventTime}>
                    <span>
                        {props.eventDetail.data[index].eventDate.slice(0,10) } 
                    </span>
                      <span>
                        {props.eventDetail.data[index].eventTime }
                      </span>
                </div>
              </div>
          );
        })}

      </div>
    </>
  );
}
