import useProject from '~/modules/user/shared/hooks/useProject';

const CookieProPolicy = () => {
    const project = useProject();

    if (!project.use_cookie_pro || !project.google_tag_manager) {
        return null;
    }

    return <div id="ot-sdk-cookie-policy" className="s-cms-content  s-cms-content--padded"></div>;
};

export default CookieProPolicy;
