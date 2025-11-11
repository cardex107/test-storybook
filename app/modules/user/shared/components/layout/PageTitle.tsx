interface PageTitleProps {
    title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
    return (
        <div className="m-page-title--private">
            <h1 className="m-page-title--private__title">{title}</h1>
        </div>
    );
};

export default PageTitle;
