interface TitleSubTitleProps{
    title : string
    classTitle : string
    subTitle : string
    classSubTitle : string
}
export const TitleSubTitle = ({title,classSubTitle,classTitle,subTitle}:TitleSubTitleProps) => {
  return <div>
    <h3 className={classTitle}>{title}</h3>
    <p className={classSubTitle}>{subTitle}</p>
  </div>;
};
