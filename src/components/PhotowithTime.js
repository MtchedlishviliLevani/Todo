import PhotoWithTimeCSS from "../styles/PhotoWithTime.module.css";
export default function PhotowithTime() {
  const date = new Date();
  const hours = date;
  return (
    <div>
      <div className={PhotoWithTimeCSS.backgroundPhoto}>
        <div className={PhotoWithTimeCSS.time_wrapper}>
          <span className={PhotoWithTimeCSS.date}>Thur 9</span>
          <span
            className={PhotoWithTimeCSS.time}
          >{`${date.getHours()} : ${date.getMinutes()} AM`}</span>
        </div>
      </div>
    </div>
  );
}
