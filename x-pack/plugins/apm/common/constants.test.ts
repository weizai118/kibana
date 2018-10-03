/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { get } from 'lodash';
import { Span } from '../typings/Span';
import { Transaction } from '../typings/Transaction';
import {
  PROCESSOR_EVENT,
  PROCESSOR_NAME,
  REQUEST_URL_FULL,
  SERVICE_AGENT_NAME,
  SERVICE_LANGUAGE_NAME,
  SERVICE_NAME,
  SPAN_DURATION,
  SPAN_HEX_ID,
  SPAN_ID,
  SPAN_NAME,
  SPAN_SQL,
  SPAN_START,
  SPAN_TYPE,
  TRANSACTION_DURATION,
  TRANSACTION_ID,
  TRANSACTION_NAME,
  TRANSACTION_RESULT,
  TRANSACTION_SAMPLED,
  TRANSACTION_TYPE,
  USER_ID
} from './constants';

describe('Transaction', () => {
  const transaction: Transaction = {
    '@timestamp': new Date().toString(),
    beat: {
      hostname: 'beat hostname',
      name: 'beat name',
      version: 'beat version'
    },
    host: {
      name: 'string;'
    },
    processor: {
      name: 'transaction',
      event: 'transaction'
    },
    context: {
      service: {
        name: 'service name',
        agent: {
          name: 'agent name',
          version: 'v1337'
        },
        language: {
          name: 'nodejs',
          version: 'v1337'
        }
      },
      user: {
        id: '1337'
      },
      request: {
        url: {
          full: 'http://www.elastic.co'
        }
      }
    },
    transaction: {
      duration: {
        us: 1337
      },
      id: 'transaction id',
      name: 'transaction name',
      result: 'transaction result',
      sampled: true,
      type: 'transaction type'
    }
  };

  // service
  it('SERVICE_NAME', () => {
    expect(get(transaction, SERVICE_NAME)).toBe('service name');
  });

  it('SERVICE_AGENT_NAME', () => {
    expect(get(transaction, SERVICE_AGENT_NAME)).toBe('agent name');
  });

  it('SERVICE_LANGUAGE_NAME', () => {
    expect(get(transaction, SERVICE_LANGUAGE_NAME)).toBe('nodejs');
  });

  it('REQUEST_URL_FULL', () => {
    expect(get(transaction, REQUEST_URL_FULL)).toBe('http://www.elastic.co');
  });

  it('USER_ID', () => {
    expect(get(transaction, USER_ID)).toBe('1337');
  });

  // processor
  it('PROCESSOR_NAME', () => {
    expect(get(transaction, PROCESSOR_NAME)).toBe('transaction');
  });

  it('PROCESSOR_EVENT', () => {
    expect(get(transaction, PROCESSOR_EVENT)).toBe('transaction');
  });

  // transaction
  it('TRANSACTION_DURATION', () => {
    expect(get(transaction, TRANSACTION_DURATION)).toBe(1337);
  });

  it('TRANSACTION_TYPE', () => {
    expect(get(transaction, TRANSACTION_TYPE)).toBe('transaction type');
  });

  it('TRANSACTION_RESULT', () => {
    expect(get(transaction, TRANSACTION_RESULT)).toBe('transaction result');
  });

  it('TRANSACTION_NAME', () => {
    expect(get(transaction, TRANSACTION_NAME)).toBe('transaction name');
  });

  it('TRANSACTION_ID', () => {
    expect(get(transaction, TRANSACTION_ID)).toBe('transaction id');
  });

  it('TRANSACTION_SAMPLED', () => {
    expect(get(transaction, TRANSACTION_SAMPLED)).toBe(true);
  });
});

describe('Span', () => {
  const span: Span = {
    '@timestamp': new Date().toString(),
    beat: {
      hostname: 'beat hostname',
      name: 'beat name',
      version: 'beat version'
    },
    host: {
      name: 'string;'
    },
    processor: {
      name: 'transaction',
      event: 'span'
    },
    context: {
      db: {
        statement: 'db statement'
      },
      service: {
        name: 'service name',
        agent: {
          name: 'agent name',
          version: 'v1337'
        },
        language: {
          name: 'nodejs',
          version: 'v1337'
        }
      }
    },
    span: {
      duration: {
        us: 1337
      },
      start: {
        us: 1337
      },
      name: 'span name',
      type: 'span type',
      id: 1337,
      hex_id: 'hex id'
    },
    transaction: {
      id: 'transaction id'
    }
  };

  // service
  it('SERVICE_NAME', () => {
    expect(get(span, SERVICE_NAME)).toBe('service name');
  });

  it('SERVICE_AGENT_NAME', () => {
    expect(get(span, SERVICE_AGENT_NAME)).toBe('agent name');
  });

  it('SERVICE_LANGUAGE_NAME', () => {
    expect(get(span, SERVICE_LANGUAGE_NAME)).toBe('nodejs');
  });

  // processor
  it('PROCESSOR_NAME', () => {
    expect(get(span, PROCESSOR_NAME)).toBe('transaction');
  });

  it('PROCESSOR_EVENT', () => {
    expect(get(span, PROCESSOR_EVENT)).toBe('span');
  });

  // span
  it('SPAN_START', () => {
    expect(get(span, SPAN_START)).toBe(1337);
  });

  it('SPAN_DURATION', () => {
    expect(get(span, SPAN_DURATION)).toBe(1337);
  });

  it('SPAN_TYPE', () => {
    expect(get(span, SPAN_TYPE)).toBe('span type');
  });

  it('SPAN_NAME', () => {
    expect(get(span, SPAN_NAME)).toBe('span name');
  });

  it('SPAN_ID', () => {
    expect(get(span, SPAN_ID)).toBe(1337);
  });

  it('SPAN_SQL', () => {
    expect(get(span, SPAN_SQL)).toBe('db statement');
  });

  it('SPAN_HEX_ID', () => {
    expect(get(span, SPAN_HEX_ID)).toBe('hex id');
  });
});