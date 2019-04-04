/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {assert} = require('chai');
const uuid = require('uuid');
const {execSync} = require('child_process');
const {BigQuery} = require('@google-cloud/bigquery');

const bigquery = new BigQuery();

describe('Quickstart', () => {
  const datasetName = `gcloud_tests_${uuid.v4()}`.replace(/-/gi, '_');

  after(async () => {
    await bigquery.dataset(datasetName).delete({force: true});
  });

  it('quickstart should create a dataset', async () => {
    const output = execSync(`node quickstart ${datasetName}`);
    assert.strictEqual(output, `Dataset ${datasetName} created.`);
  });
});
