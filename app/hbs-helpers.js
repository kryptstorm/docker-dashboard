module.exports = {
  secondToDatetime: time => new Date(time * 1000).toDateString(),
  resolveSize: size => {
    kb = Math.round(size / 1024);
    if (kb < 1024) return `${kb} kb`;
    mb = Math.round(kb / 1024);
    if (mb < 1024) return `${mb} mb`;
    gb = Math.round(mb / 1024);
    if (gb < 1024) return `${gb} Gb`;
  }
};
