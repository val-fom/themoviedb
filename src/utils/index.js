export const status = res => {
  if (res.ok || res.status === 400) return res;
  console.log('response:', res);
  throw new Error(res.statusText);
};

export const json = res => res.json();
