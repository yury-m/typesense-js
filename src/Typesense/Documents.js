'use strict'

import Collections from './Collections'

const RESOURCEPATH = '/documents'

export default class Documents {
  constructor (collectionName, apiCall) {
    this._collectionName = collectionName
    this._apiCall = apiCall
  }

  create (document) {
    return this._apiCall.post(this._endpointPath(), document)
  }

  async createMany (documents) {
    let documentsInJSONLFormat = documents.map(document => JSON.stringify(document)).join('\n')
    let resultsInJSONLFormat = await this.import(documentsInJSONLFormat)
    return resultsInJSONLFormat.split('\n').map(r => JSON.parse((r)))
  }

  import (documentsInJSONLFormat) {
    return this._apiCall.performRequest(
      'post',
      this._endpointPath('import'),
      undefined,
      documentsInJSONLFormat,
      {'Content-Type': 'text/plain'}
    )
  }

  export () {
    return this._apiCall.get(this._endpointPath('export'))
  }

  search (searchParameters) {
    return this._apiCall.get(this._endpointPath('search'), searchParameters)
  }

  _endpointPath (operation) {
    return `${Collections.RESOURCEPATH}/${this._collectionName}${Documents.RESOURCEPATH}${operation === undefined ? '' : '/' + operation}`
  }

  static get RESOURCEPATH () {
    return RESOURCEPATH
  }
}
