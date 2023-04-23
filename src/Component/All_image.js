const importAll = (r) => {
  // console.log("wow", r.keys());
  let image = [];
  r?.keys().map((item) => {
    image[item.replace("./", "")] = r(item);
  });
  return image;
};

export const handleGetAllImages = () => {
  const images1 = importAll(
    require.context("../listfoldertree/test/00001/FLAIR/", false, /\.png/)
  );
  const images2 = importAll(
    require.context("../listfoldertree/test/00001/T1w/", false, /\.png/)
  );
  const images3 = importAll(
    require.context("../listfoldertree/test/00001/T1wCE/", false, /\.png/)
  );
  const images4 = importAll(
    require.context("../listfoldertree/test/00001/T2w/", false, /\.png/)
  );
  const images = [images1, images2, images3, images4];
  const Allimg = images.map((images) => {
    return images;
  });
  // const Allimages = data.flat();
  // console.log("images", images1, images2);
  return Allimg;
};
console.log("images", handleGetAllImages());
