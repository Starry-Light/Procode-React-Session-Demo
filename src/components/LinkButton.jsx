function LinkButton({ platform, url }) {
  return (
    <a href={url} className="link-btn" target="_blank">
      {platform}
    </a>
  );
}

export default LinkButton;
