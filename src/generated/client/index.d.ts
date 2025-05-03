
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Performance
 * 
 */
export type Performance = $Result.DefaultSelection<Prisma.$PerformancePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model OccupiedSeat
 * 
 */
export type OccupiedSeat = $Result.DefaultSelection<Prisma.$OccupiedSeatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performance`: Exposes CRUD operations for the **Performance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Performances
    * const performances = await prisma.performance.findMany()
    * ```
    */
  get performance(): Prisma.PerformanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occupiedSeat`: Exposes CRUD operations for the **OccupiedSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OccupiedSeats
    * const occupiedSeats = await prisma.occupiedSeat.findMany()
    * ```
    */
  get occupiedSeat(): Prisma.OccupiedSeatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Performance: 'Performance',
    Ticket: 'Ticket',
    OccupiedSeat: 'OccupiedSeat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "performance" | "ticket" | "occupiedSeat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Performance: {
        payload: Prisma.$PerformancePayload<ExtArgs>
        fields: Prisma.PerformanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>
          }
          findFirst: {
            args: Prisma.PerformanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>
          }
          findMany: {
            args: Prisma.PerformanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>[]
          }
          create: {
            args: Prisma.PerformanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>
          }
          createMany: {
            args: Prisma.PerformanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerformanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>[]
          }
          delete: {
            args: Prisma.PerformanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>
          }
          update: {
            args: Prisma.PerformanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>
          }
          deleteMany: {
            args: Prisma.PerformanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerformanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerformanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>[]
          }
          upsert: {
            args: Prisma.PerformanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>
          }
          aggregate: {
            args: Prisma.PerformanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerformance>
          }
          groupBy: {
            args: Prisma.PerformanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerformanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformanceCountArgs<ExtArgs>
            result: $Utils.Optional<PerformanceCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      OccupiedSeat: {
        payload: Prisma.$OccupiedSeatPayload<ExtArgs>
        fields: Prisma.OccupiedSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccupiedSeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccupiedSeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>
          }
          findFirst: {
            args: Prisma.OccupiedSeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccupiedSeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>
          }
          findMany: {
            args: Prisma.OccupiedSeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>[]
          }
          create: {
            args: Prisma.OccupiedSeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>
          }
          createMany: {
            args: Prisma.OccupiedSeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OccupiedSeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>[]
          }
          delete: {
            args: Prisma.OccupiedSeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>
          }
          update: {
            args: Prisma.OccupiedSeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>
          }
          deleteMany: {
            args: Prisma.OccupiedSeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccupiedSeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OccupiedSeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>[]
          }
          upsert: {
            args: Prisma.OccupiedSeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupiedSeatPayload>
          }
          aggregate: {
            args: Prisma.OccupiedSeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccupiedSeat>
          }
          groupBy: {
            args: Prisma.OccupiedSeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccupiedSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccupiedSeatCountArgs<ExtArgs>
            result: $Utils.Optional<OccupiedSeatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    performance?: PerformanceOmit
    ticket?: TicketOmit
    occupiedSeat?: OccupiedSeatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type PerformanceCountOutputType
   */

  export type PerformanceCountOutputType = {
    occupiedSeats: number
    tickets: number
  }

  export type PerformanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occupiedSeats?: boolean | PerformanceCountOutputTypeCountOccupiedSeatsArgs
    tickets?: boolean | PerformanceCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * PerformanceCountOutputType without action
   */
  export type PerformanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceCountOutputType
     */
    select?: PerformanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerformanceCountOutputType without action
   */
  export type PerformanceCountOutputTypeCountOccupiedSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccupiedSeatWhereInput
  }

  /**
   * PerformanceCountOutputType without action
   */
  export type PerformanceCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Performance
   */

  export type AggregatePerformance = {
    _count: PerformanceCountAggregateOutputType | null
    _avg: PerformanceAvgAggregateOutputType | null
    _sum: PerformanceSumAggregateOutputType | null
    _min: PerformanceMinAggregateOutputType | null
    _max: PerformanceMaxAggregateOutputType | null
  }

  export type PerformanceAvgAggregateOutputType = {
    id: number | null
  }

  export type PerformanceSumAggregateOutputType = {
    id: number | null
  }

  export type PerformanceMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    description: string | null
    image: string | null
  }

  export type PerformanceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    description: string | null
    image: string | null
  }

  export type PerformanceCountAggregateOutputType = {
    id: number
    title: number
    author: number
    description: number
    image: number
    _all: number
  }


  export type PerformanceAvgAggregateInputType = {
    id?: true
  }

  export type PerformanceSumAggregateInputType = {
    id?: true
  }

  export type PerformanceMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    image?: true
  }

  export type PerformanceMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    image?: true
  }

  export type PerformanceCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    image?: true
    _all?: true
  }

  export type PerformanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Performance to aggregate.
     */
    where?: PerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformanceOrderByWithRelationInput | PerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Performances
    **/
    _count?: true | PerformanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformanceMaxAggregateInputType
  }

  export type GetPerformanceAggregateType<T extends PerformanceAggregateArgs> = {
        [P in keyof T & keyof AggregatePerformance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformance[P]>
      : GetScalarType<T[P], AggregatePerformance[P]>
  }




  export type PerformanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceWhereInput
    orderBy?: PerformanceOrderByWithAggregationInput | PerformanceOrderByWithAggregationInput[]
    by: PerformanceScalarFieldEnum[] | PerformanceScalarFieldEnum
    having?: PerformanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformanceCountAggregateInputType | true
    _avg?: PerformanceAvgAggregateInputType
    _sum?: PerformanceSumAggregateInputType
    _min?: PerformanceMinAggregateInputType
    _max?: PerformanceMaxAggregateInputType
  }

  export type PerformanceGroupByOutputType = {
    id: number
    title: string
    author: string
    description: string
    image: string
    _count: PerformanceCountAggregateOutputType | null
    _avg: PerformanceAvgAggregateOutputType | null
    _sum: PerformanceSumAggregateOutputType | null
    _min: PerformanceMinAggregateOutputType | null
    _max: PerformanceMaxAggregateOutputType | null
  }

  type GetPerformanceGroupByPayload<T extends PerformanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], PerformanceGroupByOutputType[P]>
        }
      >
    >


  export type PerformanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    image?: boolean
    occupiedSeats?: boolean | Performance$occupiedSeatsArgs<ExtArgs>
    tickets?: boolean | Performance$ticketsArgs<ExtArgs>
    _count?: boolean | PerformanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performance"]>

  export type PerformanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["performance"]>

  export type PerformanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["performance"]>

  export type PerformanceSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    image?: boolean
  }

  export type PerformanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "description" | "image", ExtArgs["result"]["performance"]>
  export type PerformanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occupiedSeats?: boolean | Performance$occupiedSeatsArgs<ExtArgs>
    tickets?: boolean | Performance$ticketsArgs<ExtArgs>
    _count?: boolean | PerformanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerformanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PerformanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PerformancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Performance"
    objects: {
      occupiedSeats: Prisma.$OccupiedSeatPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string
      description: string
      image: string
    }, ExtArgs["result"]["performance"]>
    composites: {}
  }

  type PerformanceGetPayload<S extends boolean | null | undefined | PerformanceDefaultArgs> = $Result.GetResult<Prisma.$PerformancePayload, S>

  type PerformanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerformanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerformanceCountAggregateInputType | true
    }

  export interface PerformanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Performance'], meta: { name: 'Performance' } }
    /**
     * Find zero or one Performance that matches the filter.
     * @param {PerformanceFindUniqueArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceFindUniqueArgs>(args: SelectSubset<T, PerformanceFindUniqueArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Performance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformanceFindUniqueOrThrowArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceFindUniqueOrThrowArgs>(args: SelectSubset<T, PerformanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Performance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceFindFirstArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceFindFirstArgs>(args?: SelectSubset<T, PerformanceFindFirstArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Performance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceFindFirstOrThrowArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceFindFirstOrThrowArgs>(args?: SelectSubset<T, PerformanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Performances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performances
     * const performances = await prisma.performance.findMany()
     * 
     * // Get first 10 Performances
     * const performances = await prisma.performance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const performanceWithIdOnly = await prisma.performance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerformanceFindManyArgs>(args?: SelectSubset<T, PerformanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Performance.
     * @param {PerformanceCreateArgs} args - Arguments to create a Performance.
     * @example
     * // Create one Performance
     * const Performance = await prisma.performance.create({
     *   data: {
     *     // ... data to create a Performance
     *   }
     * })
     * 
     */
    create<T extends PerformanceCreateArgs>(args: SelectSubset<T, PerformanceCreateArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Performances.
     * @param {PerformanceCreateManyArgs} args - Arguments to create many Performances.
     * @example
     * // Create many Performances
     * const performance = await prisma.performance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerformanceCreateManyArgs>(args?: SelectSubset<T, PerformanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Performances and returns the data saved in the database.
     * @param {PerformanceCreateManyAndReturnArgs} args - Arguments to create many Performances.
     * @example
     * // Create many Performances
     * const performance = await prisma.performance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Performances and only return the `id`
     * const performanceWithIdOnly = await prisma.performance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerformanceCreateManyAndReturnArgs>(args?: SelectSubset<T, PerformanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Performance.
     * @param {PerformanceDeleteArgs} args - Arguments to delete one Performance.
     * @example
     * // Delete one Performance
     * const Performance = await prisma.performance.delete({
     *   where: {
     *     // ... filter to delete one Performance
     *   }
     * })
     * 
     */
    delete<T extends PerformanceDeleteArgs>(args: SelectSubset<T, PerformanceDeleteArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Performance.
     * @param {PerformanceUpdateArgs} args - Arguments to update one Performance.
     * @example
     * // Update one Performance
     * const performance = await prisma.performance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerformanceUpdateArgs>(args: SelectSubset<T, PerformanceUpdateArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Performances.
     * @param {PerformanceDeleteManyArgs} args - Arguments to filter Performances to delete.
     * @example
     * // Delete a few Performances
     * const { count } = await prisma.performance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerformanceDeleteManyArgs>(args?: SelectSubset<T, PerformanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performances
     * const performance = await prisma.performance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerformanceUpdateManyArgs>(args: SelectSubset<T, PerformanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Performances and returns the data updated in the database.
     * @param {PerformanceUpdateManyAndReturnArgs} args - Arguments to update many Performances.
     * @example
     * // Update many Performances
     * const performance = await prisma.performance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Performances and only return the `id`
     * const performanceWithIdOnly = await prisma.performance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerformanceUpdateManyAndReturnArgs>(args: SelectSubset<T, PerformanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Performance.
     * @param {PerformanceUpsertArgs} args - Arguments to update or create a Performance.
     * @example
     * // Update or create a Performance
     * const performance = await prisma.performance.upsert({
     *   create: {
     *     // ... data to create a Performance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceUpsertArgs>(args: SelectSubset<T, PerformanceUpsertArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCountArgs} args - Arguments to filter Performances to count.
     * @example
     * // Count the number of Performances
     * const count = await prisma.performance.count({
     *   where: {
     *     // ... the filter for the Performances we want to count
     *   }
     * })
    **/
    count<T extends PerformanceCountArgs>(
      args?: Subset<T, PerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Performance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerformanceAggregateArgs>(args: Subset<T, PerformanceAggregateArgs>): Prisma.PrismaPromise<GetPerformanceAggregateType<T>>

    /**
     * Group by Performance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerformanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Performance model
   */
  readonly fields: PerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Performance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    occupiedSeats<T extends Performance$occupiedSeatsArgs<ExtArgs> = {}>(args?: Subset<T, Performance$occupiedSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Performance$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Performance$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Performance model
   */
  interface PerformanceFieldRefs {
    readonly id: FieldRef<"Performance", 'Int'>
    readonly title: FieldRef<"Performance", 'String'>
    readonly author: FieldRef<"Performance", 'String'>
    readonly description: FieldRef<"Performance", 'String'>
    readonly image: FieldRef<"Performance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Performance findUnique
   */
  export type PerformanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * Filter, which Performance to fetch.
     */
    where: PerformanceWhereUniqueInput
  }

  /**
   * Performance findUniqueOrThrow
   */
  export type PerformanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * Filter, which Performance to fetch.
     */
    where: PerformanceWhereUniqueInput
  }

  /**
   * Performance findFirst
   */
  export type PerformanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * Filter, which Performance to fetch.
     */
    where?: PerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformanceOrderByWithRelationInput | PerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Performances.
     */
    cursor?: PerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Performances.
     */
    distinct?: PerformanceScalarFieldEnum | PerformanceScalarFieldEnum[]
  }

  /**
   * Performance findFirstOrThrow
   */
  export type PerformanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * Filter, which Performance to fetch.
     */
    where?: PerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformanceOrderByWithRelationInput | PerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Performances.
     */
    cursor?: PerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Performances.
     */
    distinct?: PerformanceScalarFieldEnum | PerformanceScalarFieldEnum[]
  }

  /**
   * Performance findMany
   */
  export type PerformanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * Filter, which Performances to fetch.
     */
    where?: PerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformanceOrderByWithRelationInput | PerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Performances.
     */
    cursor?: PerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    distinct?: PerformanceScalarFieldEnum | PerformanceScalarFieldEnum[]
  }

  /**
   * Performance create
   */
  export type PerformanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Performance.
     */
    data: XOR<PerformanceCreateInput, PerformanceUncheckedCreateInput>
  }

  /**
   * Performance createMany
   */
  export type PerformanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Performances.
     */
    data: PerformanceCreateManyInput | PerformanceCreateManyInput[]
  }

  /**
   * Performance createManyAndReturn
   */
  export type PerformanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * The data used to create many Performances.
     */
    data: PerformanceCreateManyInput | PerformanceCreateManyInput[]
  }

  /**
   * Performance update
   */
  export type PerformanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Performance.
     */
    data: XOR<PerformanceUpdateInput, PerformanceUncheckedUpdateInput>
    /**
     * Choose, which Performance to update.
     */
    where: PerformanceWhereUniqueInput
  }

  /**
   * Performance updateMany
   */
  export type PerformanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Performances.
     */
    data: XOR<PerformanceUpdateManyMutationInput, PerformanceUncheckedUpdateManyInput>
    /**
     * Filter which Performances to update
     */
    where?: PerformanceWhereInput
    /**
     * Limit how many Performances to update.
     */
    limit?: number
  }

  /**
   * Performance updateManyAndReturn
   */
  export type PerformanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * The data used to update Performances.
     */
    data: XOR<PerformanceUpdateManyMutationInput, PerformanceUncheckedUpdateManyInput>
    /**
     * Filter which Performances to update
     */
    where?: PerformanceWhereInput
    /**
     * Limit how many Performances to update.
     */
    limit?: number
  }

  /**
   * Performance upsert
   */
  export type PerformanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Performance to update in case it exists.
     */
    where: PerformanceWhereUniqueInput
    /**
     * In case the Performance found by the `where` argument doesn't exist, create a new Performance with this data.
     */
    create: XOR<PerformanceCreateInput, PerformanceUncheckedCreateInput>
    /**
     * In case the Performance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformanceUpdateInput, PerformanceUncheckedUpdateInput>
  }

  /**
   * Performance delete
   */
  export type PerformanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
    /**
     * Filter which Performance to delete.
     */
    where: PerformanceWhereUniqueInput
  }

  /**
   * Performance deleteMany
   */
  export type PerformanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Performances to delete
     */
    where?: PerformanceWhereInput
    /**
     * Limit how many Performances to delete.
     */
    limit?: number
  }

  /**
   * Performance.occupiedSeats
   */
  export type Performance$occupiedSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    where?: OccupiedSeatWhereInput
    orderBy?: OccupiedSeatOrderByWithRelationInput | OccupiedSeatOrderByWithRelationInput[]
    cursor?: OccupiedSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccupiedSeatScalarFieldEnum | OccupiedSeatScalarFieldEnum[]
  }

  /**
   * Performance.tickets
   */
  export type Performance$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Performance without action
   */
  export type PerformanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
    price: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    userId: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
    price: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    userId: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
    price: number | null
    createdAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
    price: number | null
    createdAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    userId: number
    performanceId: number
    row: number
    seat: number
    price: number
    createdAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    userId?: true
    performanceId?: true
    row?: true
    seat?: true
    price?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    userId?: true
    performanceId?: true
    row?: true
    seat?: true
    price?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    userId?: true
    performanceId?: true
    row?: true
    seat?: true
    price?: true
    createdAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    userId?: true
    performanceId?: true
    row?: true
    seat?: true
    price?: true
    createdAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    userId?: true
    performanceId?: true
    row?: true
    seat?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    userId: number
    performanceId: number
    row: number
    seat: number
    price: number
    createdAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    price?: boolean
    createdAt?: boolean
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    price?: boolean
    createdAt?: boolean
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    price?: boolean
    createdAt?: boolean
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    userId?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "performanceId" | "row" | "seat" | "price" | "createdAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      performance: Prisma.$PerformancePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      performanceId: number
      row: number
      seat: number
      price: number
      createdAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performance<T extends PerformanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerformanceDefaultArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly userId: FieldRef<"Ticket", 'Int'>
    readonly performanceId: FieldRef<"Ticket", 'Int'>
    readonly row: FieldRef<"Ticket", 'Int'>
    readonly seat: FieldRef<"Ticket", 'Int'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model OccupiedSeat
   */

  export type AggregateOccupiedSeat = {
    _count: OccupiedSeatCountAggregateOutputType | null
    _avg: OccupiedSeatAvgAggregateOutputType | null
    _sum: OccupiedSeatSumAggregateOutputType | null
    _min: OccupiedSeatMinAggregateOutputType | null
    _max: OccupiedSeatMaxAggregateOutputType | null
  }

  export type OccupiedSeatAvgAggregateOutputType = {
    id: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
  }

  export type OccupiedSeatSumAggregateOutputType = {
    id: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
  }

  export type OccupiedSeatMinAggregateOutputType = {
    id: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
  }

  export type OccupiedSeatMaxAggregateOutputType = {
    id: number | null
    performanceId: number | null
    row: number | null
    seat: number | null
  }

  export type OccupiedSeatCountAggregateOutputType = {
    id: number
    performanceId: number
    row: number
    seat: number
    _all: number
  }


  export type OccupiedSeatAvgAggregateInputType = {
    id?: true
    performanceId?: true
    row?: true
    seat?: true
  }

  export type OccupiedSeatSumAggregateInputType = {
    id?: true
    performanceId?: true
    row?: true
    seat?: true
  }

  export type OccupiedSeatMinAggregateInputType = {
    id?: true
    performanceId?: true
    row?: true
    seat?: true
  }

  export type OccupiedSeatMaxAggregateInputType = {
    id?: true
    performanceId?: true
    row?: true
    seat?: true
  }

  export type OccupiedSeatCountAggregateInputType = {
    id?: true
    performanceId?: true
    row?: true
    seat?: true
    _all?: true
  }

  export type OccupiedSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccupiedSeat to aggregate.
     */
    where?: OccupiedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccupiedSeats to fetch.
     */
    orderBy?: OccupiedSeatOrderByWithRelationInput | OccupiedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccupiedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccupiedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccupiedSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OccupiedSeats
    **/
    _count?: true | OccupiedSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccupiedSeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccupiedSeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccupiedSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccupiedSeatMaxAggregateInputType
  }

  export type GetOccupiedSeatAggregateType<T extends OccupiedSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateOccupiedSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccupiedSeat[P]>
      : GetScalarType<T[P], AggregateOccupiedSeat[P]>
  }




  export type OccupiedSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccupiedSeatWhereInput
    orderBy?: OccupiedSeatOrderByWithAggregationInput | OccupiedSeatOrderByWithAggregationInput[]
    by: OccupiedSeatScalarFieldEnum[] | OccupiedSeatScalarFieldEnum
    having?: OccupiedSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccupiedSeatCountAggregateInputType | true
    _avg?: OccupiedSeatAvgAggregateInputType
    _sum?: OccupiedSeatSumAggregateInputType
    _min?: OccupiedSeatMinAggregateInputType
    _max?: OccupiedSeatMaxAggregateInputType
  }

  export type OccupiedSeatGroupByOutputType = {
    id: number
    performanceId: number
    row: number
    seat: number
    _count: OccupiedSeatCountAggregateOutputType | null
    _avg: OccupiedSeatAvgAggregateOutputType | null
    _sum: OccupiedSeatSumAggregateOutputType | null
    _min: OccupiedSeatMinAggregateOutputType | null
    _max: OccupiedSeatMaxAggregateOutputType | null
  }

  type GetOccupiedSeatGroupByPayload<T extends OccupiedSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccupiedSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccupiedSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccupiedSeatGroupByOutputType[P]>
            : GetScalarType<T[P], OccupiedSeatGroupByOutputType[P]>
        }
      >
    >


  export type OccupiedSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occupiedSeat"]>

  export type OccupiedSeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occupiedSeat"]>

  export type OccupiedSeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occupiedSeat"]>

  export type OccupiedSeatSelectScalar = {
    id?: boolean
    performanceId?: boolean
    row?: boolean
    seat?: boolean
  }

  export type OccupiedSeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "performanceId" | "row" | "seat", ExtArgs["result"]["occupiedSeat"]>
  export type OccupiedSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
  }
  export type OccupiedSeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
  }
  export type OccupiedSeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformanceDefaultArgs<ExtArgs>
  }

  export type $OccupiedSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OccupiedSeat"
    objects: {
      performance: Prisma.$PerformancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      performanceId: number
      row: number
      seat: number
    }, ExtArgs["result"]["occupiedSeat"]>
    composites: {}
  }

  type OccupiedSeatGetPayload<S extends boolean | null | undefined | OccupiedSeatDefaultArgs> = $Result.GetResult<Prisma.$OccupiedSeatPayload, S>

  type OccupiedSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccupiedSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccupiedSeatCountAggregateInputType | true
    }

  export interface OccupiedSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OccupiedSeat'], meta: { name: 'OccupiedSeat' } }
    /**
     * Find zero or one OccupiedSeat that matches the filter.
     * @param {OccupiedSeatFindUniqueArgs} args - Arguments to find a OccupiedSeat
     * @example
     * // Get one OccupiedSeat
     * const occupiedSeat = await prisma.occupiedSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccupiedSeatFindUniqueArgs>(args: SelectSubset<T, OccupiedSeatFindUniqueArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OccupiedSeat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccupiedSeatFindUniqueOrThrowArgs} args - Arguments to find a OccupiedSeat
     * @example
     * // Get one OccupiedSeat
     * const occupiedSeat = await prisma.occupiedSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccupiedSeatFindUniqueOrThrowArgs>(args: SelectSubset<T, OccupiedSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccupiedSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatFindFirstArgs} args - Arguments to find a OccupiedSeat
     * @example
     * // Get one OccupiedSeat
     * const occupiedSeat = await prisma.occupiedSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccupiedSeatFindFirstArgs>(args?: SelectSubset<T, OccupiedSeatFindFirstArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OccupiedSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatFindFirstOrThrowArgs} args - Arguments to find a OccupiedSeat
     * @example
     * // Get one OccupiedSeat
     * const occupiedSeat = await prisma.occupiedSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccupiedSeatFindFirstOrThrowArgs>(args?: SelectSubset<T, OccupiedSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OccupiedSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OccupiedSeats
     * const occupiedSeats = await prisma.occupiedSeat.findMany()
     * 
     * // Get first 10 OccupiedSeats
     * const occupiedSeats = await prisma.occupiedSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occupiedSeatWithIdOnly = await prisma.occupiedSeat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccupiedSeatFindManyArgs>(args?: SelectSubset<T, OccupiedSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OccupiedSeat.
     * @param {OccupiedSeatCreateArgs} args - Arguments to create a OccupiedSeat.
     * @example
     * // Create one OccupiedSeat
     * const OccupiedSeat = await prisma.occupiedSeat.create({
     *   data: {
     *     // ... data to create a OccupiedSeat
     *   }
     * })
     * 
     */
    create<T extends OccupiedSeatCreateArgs>(args: SelectSubset<T, OccupiedSeatCreateArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OccupiedSeats.
     * @param {OccupiedSeatCreateManyArgs} args - Arguments to create many OccupiedSeats.
     * @example
     * // Create many OccupiedSeats
     * const occupiedSeat = await prisma.occupiedSeat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccupiedSeatCreateManyArgs>(args?: SelectSubset<T, OccupiedSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OccupiedSeats and returns the data saved in the database.
     * @param {OccupiedSeatCreateManyAndReturnArgs} args - Arguments to create many OccupiedSeats.
     * @example
     * // Create many OccupiedSeats
     * const occupiedSeat = await prisma.occupiedSeat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OccupiedSeats and only return the `id`
     * const occupiedSeatWithIdOnly = await prisma.occupiedSeat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OccupiedSeatCreateManyAndReturnArgs>(args?: SelectSubset<T, OccupiedSeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OccupiedSeat.
     * @param {OccupiedSeatDeleteArgs} args - Arguments to delete one OccupiedSeat.
     * @example
     * // Delete one OccupiedSeat
     * const OccupiedSeat = await prisma.occupiedSeat.delete({
     *   where: {
     *     // ... filter to delete one OccupiedSeat
     *   }
     * })
     * 
     */
    delete<T extends OccupiedSeatDeleteArgs>(args: SelectSubset<T, OccupiedSeatDeleteArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OccupiedSeat.
     * @param {OccupiedSeatUpdateArgs} args - Arguments to update one OccupiedSeat.
     * @example
     * // Update one OccupiedSeat
     * const occupiedSeat = await prisma.occupiedSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccupiedSeatUpdateArgs>(args: SelectSubset<T, OccupiedSeatUpdateArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OccupiedSeats.
     * @param {OccupiedSeatDeleteManyArgs} args - Arguments to filter OccupiedSeats to delete.
     * @example
     * // Delete a few OccupiedSeats
     * const { count } = await prisma.occupiedSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccupiedSeatDeleteManyArgs>(args?: SelectSubset<T, OccupiedSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccupiedSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OccupiedSeats
     * const occupiedSeat = await prisma.occupiedSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccupiedSeatUpdateManyArgs>(args: SelectSubset<T, OccupiedSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OccupiedSeats and returns the data updated in the database.
     * @param {OccupiedSeatUpdateManyAndReturnArgs} args - Arguments to update many OccupiedSeats.
     * @example
     * // Update many OccupiedSeats
     * const occupiedSeat = await prisma.occupiedSeat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OccupiedSeats and only return the `id`
     * const occupiedSeatWithIdOnly = await prisma.occupiedSeat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OccupiedSeatUpdateManyAndReturnArgs>(args: SelectSubset<T, OccupiedSeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OccupiedSeat.
     * @param {OccupiedSeatUpsertArgs} args - Arguments to update or create a OccupiedSeat.
     * @example
     * // Update or create a OccupiedSeat
     * const occupiedSeat = await prisma.occupiedSeat.upsert({
     *   create: {
     *     // ... data to create a OccupiedSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OccupiedSeat we want to update
     *   }
     * })
     */
    upsert<T extends OccupiedSeatUpsertArgs>(args: SelectSubset<T, OccupiedSeatUpsertArgs<ExtArgs>>): Prisma__OccupiedSeatClient<$Result.GetResult<Prisma.$OccupiedSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OccupiedSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatCountArgs} args - Arguments to filter OccupiedSeats to count.
     * @example
     * // Count the number of OccupiedSeats
     * const count = await prisma.occupiedSeat.count({
     *   where: {
     *     // ... the filter for the OccupiedSeats we want to count
     *   }
     * })
    **/
    count<T extends OccupiedSeatCountArgs>(
      args?: Subset<T, OccupiedSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccupiedSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OccupiedSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OccupiedSeatAggregateArgs>(args: Subset<T, OccupiedSeatAggregateArgs>): Prisma.PrismaPromise<GetOccupiedSeatAggregateType<T>>

    /**
     * Group by OccupiedSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupiedSeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OccupiedSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccupiedSeatGroupByArgs['orderBy'] }
        : { orderBy?: OccupiedSeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OccupiedSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccupiedSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OccupiedSeat model
   */
  readonly fields: OccupiedSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OccupiedSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccupiedSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performance<T extends PerformanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerformanceDefaultArgs<ExtArgs>>): Prisma__PerformanceClient<$Result.GetResult<Prisma.$PerformancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OccupiedSeat model
   */
  interface OccupiedSeatFieldRefs {
    readonly id: FieldRef<"OccupiedSeat", 'Int'>
    readonly performanceId: FieldRef<"OccupiedSeat", 'Int'>
    readonly row: FieldRef<"OccupiedSeat", 'Int'>
    readonly seat: FieldRef<"OccupiedSeat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OccupiedSeat findUnique
   */
  export type OccupiedSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * Filter, which OccupiedSeat to fetch.
     */
    where: OccupiedSeatWhereUniqueInput
  }

  /**
   * OccupiedSeat findUniqueOrThrow
   */
  export type OccupiedSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * Filter, which OccupiedSeat to fetch.
     */
    where: OccupiedSeatWhereUniqueInput
  }

  /**
   * OccupiedSeat findFirst
   */
  export type OccupiedSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * Filter, which OccupiedSeat to fetch.
     */
    where?: OccupiedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccupiedSeats to fetch.
     */
    orderBy?: OccupiedSeatOrderByWithRelationInput | OccupiedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccupiedSeats.
     */
    cursor?: OccupiedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccupiedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccupiedSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccupiedSeats.
     */
    distinct?: OccupiedSeatScalarFieldEnum | OccupiedSeatScalarFieldEnum[]
  }

  /**
   * OccupiedSeat findFirstOrThrow
   */
  export type OccupiedSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * Filter, which OccupiedSeat to fetch.
     */
    where?: OccupiedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccupiedSeats to fetch.
     */
    orderBy?: OccupiedSeatOrderByWithRelationInput | OccupiedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OccupiedSeats.
     */
    cursor?: OccupiedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccupiedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccupiedSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OccupiedSeats.
     */
    distinct?: OccupiedSeatScalarFieldEnum | OccupiedSeatScalarFieldEnum[]
  }

  /**
   * OccupiedSeat findMany
   */
  export type OccupiedSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * Filter, which OccupiedSeats to fetch.
     */
    where?: OccupiedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OccupiedSeats to fetch.
     */
    orderBy?: OccupiedSeatOrderByWithRelationInput | OccupiedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OccupiedSeats.
     */
    cursor?: OccupiedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OccupiedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OccupiedSeats.
     */
    skip?: number
    distinct?: OccupiedSeatScalarFieldEnum | OccupiedSeatScalarFieldEnum[]
  }

  /**
   * OccupiedSeat create
   */
  export type OccupiedSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a OccupiedSeat.
     */
    data: XOR<OccupiedSeatCreateInput, OccupiedSeatUncheckedCreateInput>
  }

  /**
   * OccupiedSeat createMany
   */
  export type OccupiedSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OccupiedSeats.
     */
    data: OccupiedSeatCreateManyInput | OccupiedSeatCreateManyInput[]
  }

  /**
   * OccupiedSeat createManyAndReturn
   */
  export type OccupiedSeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * The data used to create many OccupiedSeats.
     */
    data: OccupiedSeatCreateManyInput | OccupiedSeatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OccupiedSeat update
   */
  export type OccupiedSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a OccupiedSeat.
     */
    data: XOR<OccupiedSeatUpdateInput, OccupiedSeatUncheckedUpdateInput>
    /**
     * Choose, which OccupiedSeat to update.
     */
    where: OccupiedSeatWhereUniqueInput
  }

  /**
   * OccupiedSeat updateMany
   */
  export type OccupiedSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OccupiedSeats.
     */
    data: XOR<OccupiedSeatUpdateManyMutationInput, OccupiedSeatUncheckedUpdateManyInput>
    /**
     * Filter which OccupiedSeats to update
     */
    where?: OccupiedSeatWhereInput
    /**
     * Limit how many OccupiedSeats to update.
     */
    limit?: number
  }

  /**
   * OccupiedSeat updateManyAndReturn
   */
  export type OccupiedSeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * The data used to update OccupiedSeats.
     */
    data: XOR<OccupiedSeatUpdateManyMutationInput, OccupiedSeatUncheckedUpdateManyInput>
    /**
     * Filter which OccupiedSeats to update
     */
    where?: OccupiedSeatWhereInput
    /**
     * Limit how many OccupiedSeats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OccupiedSeat upsert
   */
  export type OccupiedSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the OccupiedSeat to update in case it exists.
     */
    where: OccupiedSeatWhereUniqueInput
    /**
     * In case the OccupiedSeat found by the `where` argument doesn't exist, create a new OccupiedSeat with this data.
     */
    create: XOR<OccupiedSeatCreateInput, OccupiedSeatUncheckedCreateInput>
    /**
     * In case the OccupiedSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccupiedSeatUpdateInput, OccupiedSeatUncheckedUpdateInput>
  }

  /**
   * OccupiedSeat delete
   */
  export type OccupiedSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
    /**
     * Filter which OccupiedSeat to delete.
     */
    where: OccupiedSeatWhereUniqueInput
  }

  /**
   * OccupiedSeat deleteMany
   */
  export type OccupiedSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OccupiedSeats to delete
     */
    where?: OccupiedSeatWhereInput
    /**
     * Limit how many OccupiedSeats to delete.
     */
    limit?: number
  }

  /**
   * OccupiedSeat without action
   */
  export type OccupiedSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupiedSeat
     */
    select?: OccupiedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OccupiedSeat
     */
    omit?: OccupiedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupiedSeatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PerformanceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    description: 'description',
    image: 'image'
  };

  export type PerformanceScalarFieldEnum = (typeof PerformanceScalarFieldEnum)[keyof typeof PerformanceScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    performanceId: 'performanceId',
    row: 'row',
    seat: 'seat',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const OccupiedSeatScalarFieldEnum: {
    id: 'id',
    performanceId: 'performanceId',
    row: 'row',
    seat: 'seat'
  };

  export type OccupiedSeatScalarFieldEnum = (typeof OccupiedSeatScalarFieldEnum)[keyof typeof OccupiedSeatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    tickets?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    tickets?: TicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type PerformanceWhereInput = {
    AND?: PerformanceWhereInput | PerformanceWhereInput[]
    OR?: PerformanceWhereInput[]
    NOT?: PerformanceWhereInput | PerformanceWhereInput[]
    id?: IntFilter<"Performance"> | number
    title?: StringFilter<"Performance"> | string
    author?: StringFilter<"Performance"> | string
    description?: StringFilter<"Performance"> | string
    image?: StringFilter<"Performance"> | string
    occupiedSeats?: OccupiedSeatListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type PerformanceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    image?: SortOrder
    occupiedSeats?: OccupiedSeatOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type PerformanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerformanceWhereInput | PerformanceWhereInput[]
    OR?: PerformanceWhereInput[]
    NOT?: PerformanceWhereInput | PerformanceWhereInput[]
    title?: StringFilter<"Performance"> | string
    author?: StringFilter<"Performance"> | string
    description?: StringFilter<"Performance"> | string
    image?: StringFilter<"Performance"> | string
    occupiedSeats?: OccupiedSeatListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type PerformanceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    image?: SortOrder
    _count?: PerformanceCountOrderByAggregateInput
    _avg?: PerformanceAvgOrderByAggregateInput
    _max?: PerformanceMaxOrderByAggregateInput
    _min?: PerformanceMinOrderByAggregateInput
    _sum?: PerformanceSumOrderByAggregateInput
  }

  export type PerformanceScalarWhereWithAggregatesInput = {
    AND?: PerformanceScalarWhereWithAggregatesInput | PerformanceScalarWhereWithAggregatesInput[]
    OR?: PerformanceScalarWhereWithAggregatesInput[]
    NOT?: PerformanceScalarWhereWithAggregatesInput | PerformanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Performance"> | number
    title?: StringWithAggregatesFilter<"Performance"> | string
    author?: StringWithAggregatesFilter<"Performance"> | string
    description?: StringWithAggregatesFilter<"Performance"> | string
    image?: StringWithAggregatesFilter<"Performance"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    userId?: IntFilter<"Ticket"> | number
    performanceId?: IntFilter<"Ticket"> | number
    row?: IntFilter<"Ticket"> | number
    seat?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    performance?: XOR<PerformanceScalarRelationFilter, PerformanceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    performance?: PerformanceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    userId?: IntFilter<"Ticket"> | number
    performanceId?: IntFilter<"Ticket"> | number
    row?: IntFilter<"Ticket"> | number
    seat?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    performance?: XOR<PerformanceScalarRelationFilter, PerformanceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    userId?: IntWithAggregatesFilter<"Ticket"> | number
    performanceId?: IntWithAggregatesFilter<"Ticket"> | number
    row?: IntWithAggregatesFilter<"Ticket"> | number
    seat?: IntWithAggregatesFilter<"Ticket"> | number
    price?: IntWithAggregatesFilter<"Ticket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type OccupiedSeatWhereInput = {
    AND?: OccupiedSeatWhereInput | OccupiedSeatWhereInput[]
    OR?: OccupiedSeatWhereInput[]
    NOT?: OccupiedSeatWhereInput | OccupiedSeatWhereInput[]
    id?: IntFilter<"OccupiedSeat"> | number
    performanceId?: IntFilter<"OccupiedSeat"> | number
    row?: IntFilter<"OccupiedSeat"> | number
    seat?: IntFilter<"OccupiedSeat"> | number
    performance?: XOR<PerformanceScalarRelationFilter, PerformanceWhereInput>
  }

  export type OccupiedSeatOrderByWithRelationInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    performance?: PerformanceOrderByWithRelationInput
  }

  export type OccupiedSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccupiedSeatWhereInput | OccupiedSeatWhereInput[]
    OR?: OccupiedSeatWhereInput[]
    NOT?: OccupiedSeatWhereInput | OccupiedSeatWhereInput[]
    performanceId?: IntFilter<"OccupiedSeat"> | number
    row?: IntFilter<"OccupiedSeat"> | number
    seat?: IntFilter<"OccupiedSeat"> | number
    performance?: XOR<PerformanceScalarRelationFilter, PerformanceWhereInput>
  }, "id">

  export type OccupiedSeatOrderByWithAggregationInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    _count?: OccupiedSeatCountOrderByAggregateInput
    _avg?: OccupiedSeatAvgOrderByAggregateInput
    _max?: OccupiedSeatMaxOrderByAggregateInput
    _min?: OccupiedSeatMinOrderByAggregateInput
    _sum?: OccupiedSeatSumOrderByAggregateInput
  }

  export type OccupiedSeatScalarWhereWithAggregatesInput = {
    AND?: OccupiedSeatScalarWhereWithAggregatesInput | OccupiedSeatScalarWhereWithAggregatesInput[]
    OR?: OccupiedSeatScalarWhereWithAggregatesInput[]
    NOT?: OccupiedSeatScalarWhereWithAggregatesInput | OccupiedSeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OccupiedSeat"> | number
    performanceId?: IntWithAggregatesFilter<"OccupiedSeat"> | number
    row?: IntWithAggregatesFilter<"OccupiedSeat"> | number
    seat?: IntWithAggregatesFilter<"OccupiedSeat"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role: string
    tickets?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role: string
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PerformanceCreateInput = {
    title: string
    author: string
    description: string
    image: string
    occupiedSeats?: OccupiedSeatCreateNestedManyWithoutPerformanceInput
    tickets?: TicketCreateNestedManyWithoutPerformanceInput
  }

  export type PerformanceUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    description: string
    image: string
    occupiedSeats?: OccupiedSeatUncheckedCreateNestedManyWithoutPerformanceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPerformanceInput
  }

  export type PerformanceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    occupiedSeats?: OccupiedSeatUpdateManyWithoutPerformanceNestedInput
    tickets?: TicketUpdateManyWithoutPerformanceNestedInput
  }

  export type PerformanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    occupiedSeats?: OccupiedSeatUncheckedUpdateManyWithoutPerformanceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPerformanceNestedInput
  }

  export type PerformanceCreateManyInput = {
    id?: number
    title: string
    author: string
    description: string
    image: string
  }

  export type PerformanceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type PerformanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    row: number
    seat: number
    price: number
    createdAt?: Date | string
    performance: PerformanceCreateNestedOneWithoutTicketsInput
    user: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    userId: number
    performanceId: number
    row: number
    seat: number
    price: number
    createdAt?: Date | string
  }

  export type TicketUpdateInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: PerformanceUpdateOneRequiredWithoutTicketsNestedInput
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    performanceId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: number
    userId: number
    performanceId: number
    row: number
    seat: number
    price: number
    createdAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    performanceId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccupiedSeatCreateInput = {
    row: number
    seat: number
    performance: PerformanceCreateNestedOneWithoutOccupiedSeatsInput
  }

  export type OccupiedSeatUncheckedCreateInput = {
    id?: number
    performanceId: number
    row: number
    seat: number
  }

  export type OccupiedSeatUpdateInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    performance?: PerformanceUpdateOneRequiredWithoutOccupiedSeatsNestedInput
  }

  export type OccupiedSeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    performanceId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
  }

  export type OccupiedSeatCreateManyInput = {
    id?: number
    performanceId: number
    row: number
    seat: number
  }

  export type OccupiedSeatUpdateManyMutationInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
  }

  export type OccupiedSeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    performanceId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type OccupiedSeatListRelationFilter = {
    every?: OccupiedSeatWhereInput
    some?: OccupiedSeatWhereInput
    none?: OccupiedSeatWhereInput
  }

  export type OccupiedSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerformanceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type PerformanceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerformanceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type PerformanceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type PerformanceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PerformanceScalarRelationFilter = {
    is?: PerformanceWhereInput
    isNot?: PerformanceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
    price?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OccupiedSeatCountOrderByAggregateInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
  }

  export type OccupiedSeatAvgOrderByAggregateInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
  }

  export type OccupiedSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
  }

  export type OccupiedSeatMinOrderByAggregateInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
  }

  export type OccupiedSeatSumOrderByAggregateInput = {
    id?: SortOrder
    performanceId?: SortOrder
    row?: SortOrder
    seat?: SortOrder
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OccupiedSeatCreateNestedManyWithoutPerformanceInput = {
    create?: XOR<OccupiedSeatCreateWithoutPerformanceInput, OccupiedSeatUncheckedCreateWithoutPerformanceInput> | OccupiedSeatCreateWithoutPerformanceInput[] | OccupiedSeatUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: OccupiedSeatCreateOrConnectWithoutPerformanceInput | OccupiedSeatCreateOrConnectWithoutPerformanceInput[]
    createMany?: OccupiedSeatCreateManyPerformanceInputEnvelope
    connect?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutPerformanceInput = {
    create?: XOR<TicketCreateWithoutPerformanceInput, TicketUncheckedCreateWithoutPerformanceInput> | TicketCreateWithoutPerformanceInput[] | TicketUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPerformanceInput | TicketCreateOrConnectWithoutPerformanceInput[]
    createMany?: TicketCreateManyPerformanceInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OccupiedSeatUncheckedCreateNestedManyWithoutPerformanceInput = {
    create?: XOR<OccupiedSeatCreateWithoutPerformanceInput, OccupiedSeatUncheckedCreateWithoutPerformanceInput> | OccupiedSeatCreateWithoutPerformanceInput[] | OccupiedSeatUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: OccupiedSeatCreateOrConnectWithoutPerformanceInput | OccupiedSeatCreateOrConnectWithoutPerformanceInput[]
    createMany?: OccupiedSeatCreateManyPerformanceInputEnvelope
    connect?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutPerformanceInput = {
    create?: XOR<TicketCreateWithoutPerformanceInput, TicketUncheckedCreateWithoutPerformanceInput> | TicketCreateWithoutPerformanceInput[] | TicketUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPerformanceInput | TicketCreateOrConnectWithoutPerformanceInput[]
    createMany?: TicketCreateManyPerformanceInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OccupiedSeatUpdateManyWithoutPerformanceNestedInput = {
    create?: XOR<OccupiedSeatCreateWithoutPerformanceInput, OccupiedSeatUncheckedCreateWithoutPerformanceInput> | OccupiedSeatCreateWithoutPerformanceInput[] | OccupiedSeatUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: OccupiedSeatCreateOrConnectWithoutPerformanceInput | OccupiedSeatCreateOrConnectWithoutPerformanceInput[]
    upsert?: OccupiedSeatUpsertWithWhereUniqueWithoutPerformanceInput | OccupiedSeatUpsertWithWhereUniqueWithoutPerformanceInput[]
    createMany?: OccupiedSeatCreateManyPerformanceInputEnvelope
    set?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    disconnect?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    delete?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    connect?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    update?: OccupiedSeatUpdateWithWhereUniqueWithoutPerformanceInput | OccupiedSeatUpdateWithWhereUniqueWithoutPerformanceInput[]
    updateMany?: OccupiedSeatUpdateManyWithWhereWithoutPerformanceInput | OccupiedSeatUpdateManyWithWhereWithoutPerformanceInput[]
    deleteMany?: OccupiedSeatScalarWhereInput | OccupiedSeatScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutPerformanceNestedInput = {
    create?: XOR<TicketCreateWithoutPerformanceInput, TicketUncheckedCreateWithoutPerformanceInput> | TicketCreateWithoutPerformanceInput[] | TicketUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPerformanceInput | TicketCreateOrConnectWithoutPerformanceInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPerformanceInput | TicketUpsertWithWhereUniqueWithoutPerformanceInput[]
    createMany?: TicketCreateManyPerformanceInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPerformanceInput | TicketUpdateWithWhereUniqueWithoutPerformanceInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPerformanceInput | TicketUpdateManyWithWhereWithoutPerformanceInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OccupiedSeatUncheckedUpdateManyWithoutPerformanceNestedInput = {
    create?: XOR<OccupiedSeatCreateWithoutPerformanceInput, OccupiedSeatUncheckedCreateWithoutPerformanceInput> | OccupiedSeatCreateWithoutPerformanceInput[] | OccupiedSeatUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: OccupiedSeatCreateOrConnectWithoutPerformanceInput | OccupiedSeatCreateOrConnectWithoutPerformanceInput[]
    upsert?: OccupiedSeatUpsertWithWhereUniqueWithoutPerformanceInput | OccupiedSeatUpsertWithWhereUniqueWithoutPerformanceInput[]
    createMany?: OccupiedSeatCreateManyPerformanceInputEnvelope
    set?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    disconnect?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    delete?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    connect?: OccupiedSeatWhereUniqueInput | OccupiedSeatWhereUniqueInput[]
    update?: OccupiedSeatUpdateWithWhereUniqueWithoutPerformanceInput | OccupiedSeatUpdateWithWhereUniqueWithoutPerformanceInput[]
    updateMany?: OccupiedSeatUpdateManyWithWhereWithoutPerformanceInput | OccupiedSeatUpdateManyWithWhereWithoutPerformanceInput[]
    deleteMany?: OccupiedSeatScalarWhereInput | OccupiedSeatScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutPerformanceNestedInput = {
    create?: XOR<TicketCreateWithoutPerformanceInput, TicketUncheckedCreateWithoutPerformanceInput> | TicketCreateWithoutPerformanceInput[] | TicketUncheckedCreateWithoutPerformanceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPerformanceInput | TicketCreateOrConnectWithoutPerformanceInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPerformanceInput | TicketUpsertWithWhereUniqueWithoutPerformanceInput[]
    createMany?: TicketCreateManyPerformanceInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPerformanceInput | TicketUpdateWithWhereUniqueWithoutPerformanceInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPerformanceInput | TicketUpdateManyWithWhereWithoutPerformanceInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PerformanceCreateNestedOneWithoutTicketsInput = {
    create?: XOR<PerformanceCreateWithoutTicketsInput, PerformanceUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PerformanceCreateOrConnectWithoutTicketsInput
    connect?: PerformanceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PerformanceUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<PerformanceCreateWithoutTicketsInput, PerformanceUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PerformanceCreateOrConnectWithoutTicketsInput
    upsert?: PerformanceUpsertWithoutTicketsInput
    connect?: PerformanceWhereUniqueInput
    update?: XOR<XOR<PerformanceUpdateToOneWithWhereWithoutTicketsInput, PerformanceUpdateWithoutTicketsInput>, PerformanceUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type PerformanceCreateNestedOneWithoutOccupiedSeatsInput = {
    create?: XOR<PerformanceCreateWithoutOccupiedSeatsInput, PerformanceUncheckedCreateWithoutOccupiedSeatsInput>
    connectOrCreate?: PerformanceCreateOrConnectWithoutOccupiedSeatsInput
    connect?: PerformanceWhereUniqueInput
  }

  export type PerformanceUpdateOneRequiredWithoutOccupiedSeatsNestedInput = {
    create?: XOR<PerformanceCreateWithoutOccupiedSeatsInput, PerformanceUncheckedCreateWithoutOccupiedSeatsInput>
    connectOrCreate?: PerformanceCreateOrConnectWithoutOccupiedSeatsInput
    upsert?: PerformanceUpsertWithoutOccupiedSeatsInput
    connect?: PerformanceWhereUniqueInput
    update?: XOR<XOR<PerformanceUpdateToOneWithWhereWithoutOccupiedSeatsInput, PerformanceUpdateWithoutOccupiedSeatsInput>, PerformanceUncheckedUpdateWithoutOccupiedSeatsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TicketCreateWithoutUserInput = {
    row: number
    seat: number
    price: number
    createdAt?: Date | string
    performance: PerformanceCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: number
    performanceId: number
    row: number
    seat: number
    price: number
    createdAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    userId?: IntFilter<"Ticket"> | number
    performanceId?: IntFilter<"Ticket"> | number
    row?: IntFilter<"Ticket"> | number
    seat?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type OccupiedSeatCreateWithoutPerformanceInput = {
    row: number
    seat: number
  }

  export type OccupiedSeatUncheckedCreateWithoutPerformanceInput = {
    id?: number
    row: number
    seat: number
  }

  export type OccupiedSeatCreateOrConnectWithoutPerformanceInput = {
    where: OccupiedSeatWhereUniqueInput
    create: XOR<OccupiedSeatCreateWithoutPerformanceInput, OccupiedSeatUncheckedCreateWithoutPerformanceInput>
  }

  export type OccupiedSeatCreateManyPerformanceInputEnvelope = {
    data: OccupiedSeatCreateManyPerformanceInput | OccupiedSeatCreateManyPerformanceInput[]
  }

  export type TicketCreateWithoutPerformanceInput = {
    row: number
    seat: number
    price: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPerformanceInput = {
    id?: number
    userId: number
    row: number
    seat: number
    price: number
    createdAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutPerformanceInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPerformanceInput, TicketUncheckedCreateWithoutPerformanceInput>
  }

  export type TicketCreateManyPerformanceInputEnvelope = {
    data: TicketCreateManyPerformanceInput | TicketCreateManyPerformanceInput[]
  }

  export type OccupiedSeatUpsertWithWhereUniqueWithoutPerformanceInput = {
    where: OccupiedSeatWhereUniqueInput
    update: XOR<OccupiedSeatUpdateWithoutPerformanceInput, OccupiedSeatUncheckedUpdateWithoutPerformanceInput>
    create: XOR<OccupiedSeatCreateWithoutPerformanceInput, OccupiedSeatUncheckedCreateWithoutPerformanceInput>
  }

  export type OccupiedSeatUpdateWithWhereUniqueWithoutPerformanceInput = {
    where: OccupiedSeatWhereUniqueInput
    data: XOR<OccupiedSeatUpdateWithoutPerformanceInput, OccupiedSeatUncheckedUpdateWithoutPerformanceInput>
  }

  export type OccupiedSeatUpdateManyWithWhereWithoutPerformanceInput = {
    where: OccupiedSeatScalarWhereInput
    data: XOR<OccupiedSeatUpdateManyMutationInput, OccupiedSeatUncheckedUpdateManyWithoutPerformanceInput>
  }

  export type OccupiedSeatScalarWhereInput = {
    AND?: OccupiedSeatScalarWhereInput | OccupiedSeatScalarWhereInput[]
    OR?: OccupiedSeatScalarWhereInput[]
    NOT?: OccupiedSeatScalarWhereInput | OccupiedSeatScalarWhereInput[]
    id?: IntFilter<"OccupiedSeat"> | number
    performanceId?: IntFilter<"OccupiedSeat"> | number
    row?: IntFilter<"OccupiedSeat"> | number
    seat?: IntFilter<"OccupiedSeat"> | number
  }

  export type TicketUpsertWithWhereUniqueWithoutPerformanceInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPerformanceInput, TicketUncheckedUpdateWithoutPerformanceInput>
    create: XOR<TicketCreateWithoutPerformanceInput, TicketUncheckedCreateWithoutPerformanceInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPerformanceInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPerformanceInput, TicketUncheckedUpdateWithoutPerformanceInput>
  }

  export type TicketUpdateManyWithWhereWithoutPerformanceInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPerformanceInput>
  }

  export type PerformanceCreateWithoutTicketsInput = {
    title: string
    author: string
    description: string
    image: string
    occupiedSeats?: OccupiedSeatCreateNestedManyWithoutPerformanceInput
  }

  export type PerformanceUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    author: string
    description: string
    image: string
    occupiedSeats?: OccupiedSeatUncheckedCreateNestedManyWithoutPerformanceInput
  }

  export type PerformanceCreateOrConnectWithoutTicketsInput = {
    where: PerformanceWhereUniqueInput
    create: XOR<PerformanceCreateWithoutTicketsInput, PerformanceUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    email: string
    password: string
    name: string
    role: string
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: string
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type PerformanceUpsertWithoutTicketsInput = {
    update: XOR<PerformanceUpdateWithoutTicketsInput, PerformanceUncheckedUpdateWithoutTicketsInput>
    create: XOR<PerformanceCreateWithoutTicketsInput, PerformanceUncheckedCreateWithoutTicketsInput>
    where?: PerformanceWhereInput
  }

  export type PerformanceUpdateToOneWithWhereWithoutTicketsInput = {
    where?: PerformanceWhereInput
    data: XOR<PerformanceUpdateWithoutTicketsInput, PerformanceUncheckedUpdateWithoutTicketsInput>
  }

  export type PerformanceUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    occupiedSeats?: OccupiedSeatUpdateManyWithoutPerformanceNestedInput
  }

  export type PerformanceUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    occupiedSeats?: OccupiedSeatUncheckedUpdateManyWithoutPerformanceNestedInput
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PerformanceCreateWithoutOccupiedSeatsInput = {
    title: string
    author: string
    description: string
    image: string
    tickets?: TicketCreateNestedManyWithoutPerformanceInput
  }

  export type PerformanceUncheckedCreateWithoutOccupiedSeatsInput = {
    id?: number
    title: string
    author: string
    description: string
    image: string
    tickets?: TicketUncheckedCreateNestedManyWithoutPerformanceInput
  }

  export type PerformanceCreateOrConnectWithoutOccupiedSeatsInput = {
    where: PerformanceWhereUniqueInput
    create: XOR<PerformanceCreateWithoutOccupiedSeatsInput, PerformanceUncheckedCreateWithoutOccupiedSeatsInput>
  }

  export type PerformanceUpsertWithoutOccupiedSeatsInput = {
    update: XOR<PerformanceUpdateWithoutOccupiedSeatsInput, PerformanceUncheckedUpdateWithoutOccupiedSeatsInput>
    create: XOR<PerformanceCreateWithoutOccupiedSeatsInput, PerformanceUncheckedCreateWithoutOccupiedSeatsInput>
    where?: PerformanceWhereInput
  }

  export type PerformanceUpdateToOneWithWhereWithoutOccupiedSeatsInput = {
    where?: PerformanceWhereInput
    data: XOR<PerformanceUpdateWithoutOccupiedSeatsInput, PerformanceUncheckedUpdateWithoutOccupiedSeatsInput>
  }

  export type PerformanceUpdateWithoutOccupiedSeatsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutPerformanceNestedInput
  }

  export type PerformanceUncheckedUpdateWithoutOccupiedSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutPerformanceNestedInput
  }

  export type TicketCreateManyUserInput = {
    id?: number
    performanceId: number
    row: number
    seat: number
    price: number
    createdAt?: Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: PerformanceUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    performanceId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    performanceId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OccupiedSeatCreateManyPerformanceInput = {
    id?: number
    row: number
    seat: number
  }

  export type TicketCreateManyPerformanceInput = {
    id?: number
    userId: number
    row: number
    seat: number
    price: number
    createdAt?: Date | string
  }

  export type OccupiedSeatUpdateWithoutPerformanceInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
  }

  export type OccupiedSeatUncheckedUpdateWithoutPerformanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
  }

  export type OccupiedSeatUncheckedUpdateManyWithoutPerformanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUpdateWithoutPerformanceInput = {
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPerformanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutPerformanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    row?: IntFieldUpdateOperationsInput | number
    seat?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}