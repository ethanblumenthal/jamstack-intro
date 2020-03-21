exports.onCreatePage = ({ page, action }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";
    action.createPage(page);
  }
};
