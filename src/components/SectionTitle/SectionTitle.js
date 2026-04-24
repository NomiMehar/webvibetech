import styles from "./SectionTitle.module.scss";

export default function SectionTitle(props) {
  const { title, subtitle } = props;
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
