const handleimages = (i, startat, count, key) => {
  let results = [];
  for (let j = startat; j <= count; j++) {
    results.push({
      title: `Image-${j}.dcm`,
      key: `Image-${j}.png ${i}${key}`,
      isLeaf: true,
    });
  }
  return results;
};

const childrendata = (i, key) => {
  return [
    {
      title: "FLAIR",
      key: `FLAIR ${i}${key}`,
      children: handleimages(i, 101, 308, key),
    },
    {
      title: "T1w",
      key: `T1w ${i}${key}`,
      children: handleimages(i, 121, 281, key),
    },
    {
      title: "T1wCE",
      key: `T1wCE ${i}${key}`,
      children: handleimages(i, 121, 281, key),
    },
    {
      title: "T2w",
      key: `T2w ${i}${key}`,
      children: handleimages(i, 121, 281, key),
    },
  ];
};

export const handledata = (count, key) => {
  let result = [];
  for (let i = 1; i <= count; i++) {
    result.push({
      title: `00${i}`,
      key: `00${i}${key}`,
      children: childrendata(i, key),
    });
  }
  return result;
};
