const axios = require('axios');
const FormData = require('form-data');

export const pinJSONToIPFS = (JSONBody) => {
  const url = `https://nftstorage.link/ipfs/`;
  return axios
    .post(url, JSONBody, {
      headers: {
        ipfs_secret_api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFFOEZjQTBkNjkwMzcwOTdhYzM5REFhN2NFRGQ1YjIxQzMwMzBlNDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDg1MDU3NzMwMCwibmFtZSI6Im9mMW5mdC5jb20ifQ.xsz5J5tt7fnI7upbzvVPiPjeiu1Fd7s9qBnwh72pZ0A'
      }
    })
    .then(function (response) {
      const x = response.data.IpfsHash
      return x
    })
    .catch(function (error) {
      console.error(error)
    });
}

export const pinFileToIPFS = (file) => {
  const url = `https://nftstorage.link/ipfs/`;

  let data = new FormData();
  data.append('file', file)

  return axios
    .post(url, data, {
      maxContentLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        ipfs_secret_api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFFOEZjQTBkNjkwMzcwOTdhYzM5REFhN2NFRGQ1YjIxQzMwMzBlNDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDg1MDU3NzMwMCwibmFtZSI6Im9mMW5mdC5jb20ifQ.xsz5J5tt7fnI7upbzvVPiPjeiu1Fd7s9qBnwh72pZ0A'
      }
    })
    .then(function (response) {
      const y = response.data.IpfsHash
      return y
    })
    .catch(function (error) {
      console.log(error)
    });
}

export const encodedParams = "0x485f0f700000000000000000000000000000000000000000000000000000000000ad253b000000000000000000000000000000000000000000000000000000000013081b00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000008676976656e55524c000000000000000000000000000000000000000000000000"
