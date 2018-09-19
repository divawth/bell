
const list = [
  [ 'iphone', /iphone os ([\d_.]+)/ ],
  [ 'ipad', /ipad; cpu os ([\d_.]+)/ ],
  [ 'itouch', /itouch; cpu os ([\d_.]+)/ ],
  [ 'android', /android ([\d_.]+)/ ],
  [ 'wp', /windows phone ([\d_.]+)/ ],
  [ 'windows', /windows nt ([\d_.]+)/ ],
  [ 'linux', /linux/ ],
  [ 'mac', /mac os x ([\d_.]+)/ ]
];

const iosMap = {
  iphone: 1,
  ipad: 1,
  itouch: 1
};

const webMap = [ 'iphone', 'ipad', 'ipod', 'ios', 'android' ];

let parseUA = (ua) => {

  let name;
  let version;

  list.forEach(
    (item, index) => {
      let match = item[1].exec(ua);
      if (match) {
        name = item[0];
        version = match[1];
        if (version) {
          version = version.replace(/_/g, '.');
        }
        return false;
      }
    }
  );

  return {
    name: name || '',
    version: version || '',
    isWeb: webMap.indexOf(name.toLowerCase()) < 0
  };

};

export const os = () => {
  let result = parseUA(navigator.userAgent.toLowerCase());
  if (result.name) {
    result[result.name] = true;
    if (iosMap[result.name]) {
      result.ios = true;
    }
  }
  return result;
}
