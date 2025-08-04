
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model deployment
 * 
 */
export type deployment = $Result.DefaultSelection<Prisma.$deploymentPayload>
/**
 * Model publicDeployments
 * 
 */
export type publicDeployments = $Result.DefaultSelection<Prisma.$publicDeploymentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeploymentStatus: {
  QUEUED: 'QUEUED',
  IN_PROGRESS: 'IN_PROGRESS',
  READY: 'READY'
};

export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus]

}

export type DeploymentStatus = $Enums.DeploymentStatus

export const DeploymentStatus: typeof $Enums.DeploymentStatus

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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **deployment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deployments
    * const deployments = await prisma.deployment.findMany()
    * ```
    */
  get deployment(): Prisma.deploymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicDeployments`: Exposes CRUD operations for the **publicDeployments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicDeployments
    * const publicDeployments = await prisma.publicDeployments.findMany()
    * ```
    */
  get publicDeployments(): Prisma.publicDeploymentsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    user: 'user',
    project: 'project',
    deployment: 'deployment',
    publicDeployments: 'publicDeployments'
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
      modelProps: "user" | "project" | "deployment" | "publicDeployments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      deployment: {
        payload: Prisma.$deploymentPayload<ExtArgs>
        fields: Prisma.deploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>
          }
          findFirst: {
            args: Prisma.deploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>
          }
          findMany: {
            args: Prisma.deploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>[]
          }
          create: {
            args: Prisma.deploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>
          }
          createMany: {
            args: Prisma.deploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.deploymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>[]
          }
          delete: {
            args: Prisma.deploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>
          }
          update: {
            args: Prisma.deploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>
          }
          deleteMany: {
            args: Prisma.deploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.deploymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>[]
          }
          upsert: {
            args: Prisma.deploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>
          }
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeployment>
          }
          groupBy: {
            args: Prisma.deploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.deploymentCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number
          }
        }
      }
      publicDeployments: {
        payload: Prisma.$publicDeploymentsPayload<ExtArgs>
        fields: Prisma.publicDeploymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.publicDeploymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.publicDeploymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>
          }
          findFirst: {
            args: Prisma.publicDeploymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.publicDeploymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>
          }
          findMany: {
            args: Prisma.publicDeploymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>[]
          }
          create: {
            args: Prisma.publicDeploymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>
          }
          createMany: {
            args: Prisma.publicDeploymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.publicDeploymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>[]
          }
          delete: {
            args: Prisma.publicDeploymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>
          }
          update: {
            args: Prisma.publicDeploymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>
          }
          deleteMany: {
            args: Prisma.publicDeploymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.publicDeploymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.publicDeploymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>[]
          }
          upsert: {
            args: Prisma.publicDeploymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicDeploymentsPayload>
          }
          aggregate: {
            args: Prisma.PublicDeploymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicDeployments>
          }
          groupBy: {
            args: Prisma.publicDeploymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicDeploymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.publicDeploymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PublicDeploymentsCountAggregateOutputType> | number
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
    user?: userOmit
    project?: projectOmit
    deployment?: deploymentOmit
    publicDeployments?: publicDeploymentsOmit
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
    project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | UserCountOutputTypeCountProjectArgs
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
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    deployments: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | ProjectCountOutputTypeCountDeploymentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deploymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    avatar: string | null
    type: string | null
    installationId: string | null
    subId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    avatar: string | null
    type: string | null
    installationId: string | null
    subId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    avatar: number
    type: number
    installationId: number
    subId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    avatar?: true
    type?: true
    installationId?: true
    subId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    avatar?: true
    type?: true
    installationId?: true
    subId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    avatar?: true
    type?: true
    installationId?: true
    subId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    email: string
    avatar: string | null
    type: string | null
    installationId: string | null
    subId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    avatar?: boolean
    type?: boolean
    installationId?: boolean
    subId?: boolean
    project?: boolean | user$projectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    avatar?: boolean
    type?: boolean
    installationId?: boolean
    subId?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    avatar?: boolean
    type?: boolean
    installationId?: boolean
    subId?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    avatar?: boolean
    type?: boolean
    installationId?: boolean
    subId?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "avatar" | "type" | "installationId" | "subId", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | user$projectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      avatar: string | null
      type: string | null
      installationId: string | null
      subId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends user$projectArgs<ExtArgs> = {}>(args?: Subset<T, user$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly userName: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly type: FieldRef<"user", 'String'>
    readonly installationId: FieldRef<"user", 'String'>
    readonly subId: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.project
   */
  export type user$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    gitUrl: string | null
    env: string | null
    repoBranch: string | null
    subDomain: string | null
    customDomain: string | null
    outputFolder: string | null
    status: $Enums.DeploymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    gitUrl: string | null
    env: string | null
    repoBranch: string | null
    subDomain: string | null
    customDomain: string | null
    outputFolder: string | null
    status: $Enums.DeploymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    gitUrl: number
    env: number
    repoBranch: number
    subDomain: number
    customDomain: number
    outputFolder: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    gitUrl?: true
    env?: true
    repoBranch?: true
    subDomain?: true
    customDomain?: true
    outputFolder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    gitUrl?: true
    env?: true
    repoBranch?: true
    subDomain?: true
    customDomain?: true
    outputFolder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    gitUrl?: true
    env?: true
    repoBranch?: true
    subDomain?: true
    customDomain?: true
    outputFolder?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    gitUrl: string
    env: string | null
    repoBranch: string
    subDomain: string
    customDomain: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    gitUrl?: boolean
    env?: boolean
    repoBranch?: boolean
    subDomain?: boolean
    customDomain?: boolean
    outputFolder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    deployments?: boolean | project$deploymentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    gitUrl?: boolean
    env?: boolean
    repoBranch?: boolean
    subDomain?: boolean
    customDomain?: boolean
    outputFolder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    gitUrl?: boolean
    env?: boolean
    repoBranch?: boolean
    subDomain?: boolean
    customDomain?: boolean
    outputFolder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    gitUrl?: boolean
    env?: boolean
    repoBranch?: boolean
    subDomain?: boolean
    customDomain?: boolean
    outputFolder?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "gitUrl" | "env" | "repoBranch" | "subDomain" | "customDomain" | "outputFolder" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    deployments?: boolean | project$deploymentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      deployments: Prisma.$deploymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      gitUrl: string
      env: string | null
      repoBranch: string
      subDomain: string
      customDomain: string | null
      outputFolder: string
      status: $Enums.DeploymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
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
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deployments<T extends project$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, project$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'String'>
    readonly userId: FieldRef<"project", 'String'>
    readonly name: FieldRef<"project", 'String'>
    readonly gitUrl: FieldRef<"project", 'String'>
    readonly env: FieldRef<"project", 'String'>
    readonly repoBranch: FieldRef<"project", 'String'>
    readonly subDomain: FieldRef<"project", 'String'>
    readonly customDomain: FieldRef<"project", 'String'>
    readonly outputFolder: FieldRef<"project", 'String'>
    readonly status: FieldRef<"project", 'DeploymentStatus'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updatedAt: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.deployments
   */
  export type project$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    where?: deploymentWhereInput
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[]
    cursor?: deploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latest: boolean | null
    live: boolean | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latest: boolean | null
    live: boolean | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    projectId: number
    createdAt: number
    updatedAt: number
    latest: number
    live: number
    _all: number
  }


  export type DeploymentMinAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    latest?: true
    live?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    latest?: true
    live?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    latest?: true
    live?: true
    _all?: true
  }

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deployment to aggregate.
     */
    where?: deploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deployments
    **/
    _count?: true | DeploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentMaxAggregateInputType
  }

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>
  }




  export type deploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deploymentWhereInput
    orderBy?: deploymentOrderByWithAggregationInput | deploymentOrderByWithAggregationInput[]
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum
    having?: deploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentCountAggregateInputType | true
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: string
    projectId: string
    createdAt: Date
    updatedAt: Date
    latest: boolean
    live: boolean
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  type GetDeploymentGroupByPayload<T extends deploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
        }
      >
    >


  export type deploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latest?: boolean
    live?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type deploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latest?: boolean
    live?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type deploymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latest?: boolean
    live?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type deploymentSelectScalar = {
    id?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latest?: boolean
    live?: boolean
  }

  export type deploymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "createdAt" | "updatedAt" | "latest" | "live", ExtArgs["result"]["deployment"]>
  export type deploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type deploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }
  export type deploymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $deploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deployment"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      createdAt: Date
      updatedAt: Date
      latest: boolean
      live: boolean
    }, ExtArgs["result"]["deployment"]>
    composites: {}
  }

  type deploymentGetPayload<S extends boolean | null | undefined | deploymentDefaultArgs> = $Result.GetResult<Prisma.$deploymentPayload, S>

  type deploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deploymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeploymentCountAggregateInputType | true
    }

  export interface deploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deployment'], meta: { name: 'deployment' } }
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {deploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deploymentFindUniqueArgs>(args: SelectSubset<T, deploymentFindUniqueArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deployment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, deploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deploymentFindFirstArgs>(args?: SelectSubset<T, deploymentFindFirstArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, deploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     * 
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends deploymentFindManyArgs>(args?: SelectSubset<T, deploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deployment.
     * @param {deploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     * 
     */
    create<T extends deploymentCreateArgs>(args: SelectSubset<T, deploymentCreateArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deployments.
     * @param {deploymentCreateManyArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deploymentCreateManyArgs>(args?: SelectSubset<T, deploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deployments and returns the data saved in the database.
     * @param {deploymentCreateManyAndReturnArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends deploymentCreateManyAndReturnArgs>(args?: SelectSubset<T, deploymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deployment.
     * @param {deploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     * 
     */
    delete<T extends deploymentDeleteArgs>(args: SelectSubset<T, deploymentDeleteArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deployment.
     * @param {deploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deploymentUpdateArgs>(args: SelectSubset<T, deploymentUpdateArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deployments.
     * @param {deploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deploymentDeleteManyArgs>(args?: SelectSubset<T, deploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deploymentUpdateManyArgs>(args: SelectSubset<T, deploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments and returns the data updated in the database.
     * @param {deploymentUpdateManyAndReturnArgs} args - Arguments to update many Deployments.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.updateManyAndReturn({
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
    updateManyAndReturn<T extends deploymentUpdateManyAndReturnArgs>(args: SelectSubset<T, deploymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deployment.
     * @param {deploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     */
    upsert<T extends deploymentUpsertArgs>(args: SelectSubset<T, deploymentUpsertArgs<ExtArgs>>): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
    **/
    count<T extends deploymentCountArgs>(
      args?: Subset<T, deploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeploymentAggregateArgs>(args: Subset<T, DeploymentAggregateArgs>): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentGroupByArgs} args - Group by arguments.
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
      T extends deploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deploymentGroupByArgs['orderBy'] }
        : { orderBy?: deploymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, deploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deployment model
   */
  readonly fields: deploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the deployment model
   */
  interface deploymentFieldRefs {
    readonly id: FieldRef<"deployment", 'String'>
    readonly projectId: FieldRef<"deployment", 'String'>
    readonly createdAt: FieldRef<"deployment", 'DateTime'>
    readonly updatedAt: FieldRef<"deployment", 'DateTime'>
    readonly latest: FieldRef<"deployment", 'Boolean'>
    readonly live: FieldRef<"deployment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * deployment findUnique
   */
  export type deploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * Filter, which deployment to fetch.
     */
    where: deploymentWhereUniqueInput
  }

  /**
   * deployment findUniqueOrThrow
   */
  export type deploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * Filter, which deployment to fetch.
     */
    where: deploymentWhereUniqueInput
  }

  /**
   * deployment findFirst
   */
  export type deploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * Filter, which deployment to fetch.
     */
    where?: deploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deployments.
     */
    cursor?: deploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * deployment findFirstOrThrow
   */
  export type deploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * Filter, which deployment to fetch.
     */
    where?: deploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deployments.
     */
    cursor?: deploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * deployment findMany
   */
  export type deploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * Filter, which deployments to fetch.
     */
    where?: deploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deployments.
     */
    cursor?: deploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deployments.
     */
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * deployment create
   */
  export type deploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a deployment.
     */
    data: XOR<deploymentCreateInput, deploymentUncheckedCreateInput>
  }

  /**
   * deployment createMany
   */
  export type deploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deployments.
     */
    data: deploymentCreateManyInput | deploymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * deployment createManyAndReturn
   */
  export type deploymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * The data used to create many deployments.
     */
    data: deploymentCreateManyInput | deploymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * deployment update
   */
  export type deploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a deployment.
     */
    data: XOR<deploymentUpdateInput, deploymentUncheckedUpdateInput>
    /**
     * Choose, which deployment to update.
     */
    where: deploymentWhereUniqueInput
  }

  /**
   * deployment updateMany
   */
  export type deploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deployments.
     */
    data: XOR<deploymentUpdateManyMutationInput, deploymentUncheckedUpdateManyInput>
    /**
     * Filter which deployments to update
     */
    where?: deploymentWhereInput
    /**
     * Limit how many deployments to update.
     */
    limit?: number
  }

  /**
   * deployment updateManyAndReturn
   */
  export type deploymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * The data used to update deployments.
     */
    data: XOR<deploymentUpdateManyMutationInput, deploymentUncheckedUpdateManyInput>
    /**
     * Filter which deployments to update
     */
    where?: deploymentWhereInput
    /**
     * Limit how many deployments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * deployment upsert
   */
  export type deploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the deployment to update in case it exists.
     */
    where: deploymentWhereUniqueInput
    /**
     * In case the deployment found by the `where` argument doesn't exist, create a new deployment with this data.
     */
    create: XOR<deploymentCreateInput, deploymentUncheckedCreateInput>
    /**
     * In case the deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deploymentUpdateInput, deploymentUncheckedUpdateInput>
  }

  /**
   * deployment delete
   */
  export type deploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
    /**
     * Filter which deployment to delete.
     */
    where: deploymentWhereUniqueInput
  }

  /**
   * deployment deleteMany
   */
  export type deploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deployments to delete
     */
    where?: deploymentWhereInput
    /**
     * Limit how many deployments to delete.
     */
    limit?: number
  }

  /**
   * deployment without action
   */
  export type deploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deployment
     */
    omit?: deploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deploymentInclude<ExtArgs> | null
  }


  /**
   * Model publicDeployments
   */

  export type AggregatePublicDeployments = {
    _count: PublicDeploymentsCountAggregateOutputType | null
    _min: PublicDeploymentsMinAggregateOutputType | null
    _max: PublicDeploymentsMaxAggregateOutputType | null
  }

  export type PublicDeploymentsMinAggregateOutputType = {
    id: string | null
    subdomain: string | null
    gitURL: string | null
    live: boolean | null
  }

  export type PublicDeploymentsMaxAggregateOutputType = {
    id: string | null
    subdomain: string | null
    gitURL: string | null
    live: boolean | null
  }

  export type PublicDeploymentsCountAggregateOutputType = {
    id: number
    subdomain: number
    gitURL: number
    live: number
    _all: number
  }


  export type PublicDeploymentsMinAggregateInputType = {
    id?: true
    subdomain?: true
    gitURL?: true
    live?: true
  }

  export type PublicDeploymentsMaxAggregateInputType = {
    id?: true
    subdomain?: true
    gitURL?: true
    live?: true
  }

  export type PublicDeploymentsCountAggregateInputType = {
    id?: true
    subdomain?: true
    gitURL?: true
    live?: true
    _all?: true
  }

  export type PublicDeploymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publicDeployments to aggregate.
     */
    where?: publicDeploymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicDeployments to fetch.
     */
    orderBy?: publicDeploymentsOrderByWithRelationInput | publicDeploymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: publicDeploymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicDeployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicDeployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned publicDeployments
    **/
    _count?: true | PublicDeploymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicDeploymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicDeploymentsMaxAggregateInputType
  }

  export type GetPublicDeploymentsAggregateType<T extends PublicDeploymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicDeployments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicDeployments[P]>
      : GetScalarType<T[P], AggregatePublicDeployments[P]>
  }




  export type publicDeploymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicDeploymentsWhereInput
    orderBy?: publicDeploymentsOrderByWithAggregationInput | publicDeploymentsOrderByWithAggregationInput[]
    by: PublicDeploymentsScalarFieldEnum[] | PublicDeploymentsScalarFieldEnum
    having?: publicDeploymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicDeploymentsCountAggregateInputType | true
    _min?: PublicDeploymentsMinAggregateInputType
    _max?: PublicDeploymentsMaxAggregateInputType
  }

  export type PublicDeploymentsGroupByOutputType = {
    id: string
    subdomain: string
    gitURL: string
    live: boolean
    _count: PublicDeploymentsCountAggregateOutputType | null
    _min: PublicDeploymentsMinAggregateOutputType | null
    _max: PublicDeploymentsMaxAggregateOutputType | null
  }

  type GetPublicDeploymentsGroupByPayload<T extends publicDeploymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicDeploymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicDeploymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicDeploymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PublicDeploymentsGroupByOutputType[P]>
        }
      >
    >


  export type publicDeploymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    gitURL?: boolean
    live?: boolean
  }, ExtArgs["result"]["publicDeployments"]>

  export type publicDeploymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    gitURL?: boolean
    live?: boolean
  }, ExtArgs["result"]["publicDeployments"]>

  export type publicDeploymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    gitURL?: boolean
    live?: boolean
  }, ExtArgs["result"]["publicDeployments"]>

  export type publicDeploymentsSelectScalar = {
    id?: boolean
    subdomain?: boolean
    gitURL?: boolean
    live?: boolean
  }

  export type publicDeploymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subdomain" | "gitURL" | "live", ExtArgs["result"]["publicDeployments"]>

  export type $publicDeploymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "publicDeployments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subdomain: string
      gitURL: string
      live: boolean
    }, ExtArgs["result"]["publicDeployments"]>
    composites: {}
  }

  type publicDeploymentsGetPayload<S extends boolean | null | undefined | publicDeploymentsDefaultArgs> = $Result.GetResult<Prisma.$publicDeploymentsPayload, S>

  type publicDeploymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<publicDeploymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicDeploymentsCountAggregateInputType | true
    }

  export interface publicDeploymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publicDeployments'], meta: { name: 'publicDeployments' } }
    /**
     * Find zero or one PublicDeployments that matches the filter.
     * @param {publicDeploymentsFindUniqueArgs} args - Arguments to find a PublicDeployments
     * @example
     * // Get one PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends publicDeploymentsFindUniqueArgs>(args: SelectSubset<T, publicDeploymentsFindUniqueArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicDeployments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {publicDeploymentsFindUniqueOrThrowArgs} args - Arguments to find a PublicDeployments
     * @example
     * // Get one PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends publicDeploymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, publicDeploymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicDeployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicDeploymentsFindFirstArgs} args - Arguments to find a PublicDeployments
     * @example
     * // Get one PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends publicDeploymentsFindFirstArgs>(args?: SelectSubset<T, publicDeploymentsFindFirstArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicDeployments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicDeploymentsFindFirstOrThrowArgs} args - Arguments to find a PublicDeployments
     * @example
     * // Get one PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends publicDeploymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, publicDeploymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicDeployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicDeploymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.findMany()
     * 
     * // Get first 10 PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicDeploymentsWithIdOnly = await prisma.publicDeployments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends publicDeploymentsFindManyArgs>(args?: SelectSubset<T, publicDeploymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicDeployments.
     * @param {publicDeploymentsCreateArgs} args - Arguments to create a PublicDeployments.
     * @example
     * // Create one PublicDeployments
     * const PublicDeployments = await prisma.publicDeployments.create({
     *   data: {
     *     // ... data to create a PublicDeployments
     *   }
     * })
     * 
     */
    create<T extends publicDeploymentsCreateArgs>(args: SelectSubset<T, publicDeploymentsCreateArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicDeployments.
     * @param {publicDeploymentsCreateManyArgs} args - Arguments to create many PublicDeployments.
     * @example
     * // Create many PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends publicDeploymentsCreateManyArgs>(args?: SelectSubset<T, publicDeploymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicDeployments and returns the data saved in the database.
     * @param {publicDeploymentsCreateManyAndReturnArgs} args - Arguments to create many PublicDeployments.
     * @example
     * // Create many PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicDeployments and only return the `id`
     * const publicDeploymentsWithIdOnly = await prisma.publicDeployments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends publicDeploymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, publicDeploymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicDeployments.
     * @param {publicDeploymentsDeleteArgs} args - Arguments to delete one PublicDeployments.
     * @example
     * // Delete one PublicDeployments
     * const PublicDeployments = await prisma.publicDeployments.delete({
     *   where: {
     *     // ... filter to delete one PublicDeployments
     *   }
     * })
     * 
     */
    delete<T extends publicDeploymentsDeleteArgs>(args: SelectSubset<T, publicDeploymentsDeleteArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicDeployments.
     * @param {publicDeploymentsUpdateArgs} args - Arguments to update one PublicDeployments.
     * @example
     * // Update one PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends publicDeploymentsUpdateArgs>(args: SelectSubset<T, publicDeploymentsUpdateArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicDeployments.
     * @param {publicDeploymentsDeleteManyArgs} args - Arguments to filter PublicDeployments to delete.
     * @example
     * // Delete a few PublicDeployments
     * const { count } = await prisma.publicDeployments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends publicDeploymentsDeleteManyArgs>(args?: SelectSubset<T, publicDeploymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicDeployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicDeploymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends publicDeploymentsUpdateManyArgs>(args: SelectSubset<T, publicDeploymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicDeployments and returns the data updated in the database.
     * @param {publicDeploymentsUpdateManyAndReturnArgs} args - Arguments to update many PublicDeployments.
     * @example
     * // Update many PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicDeployments and only return the `id`
     * const publicDeploymentsWithIdOnly = await prisma.publicDeployments.updateManyAndReturn({
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
    updateManyAndReturn<T extends publicDeploymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, publicDeploymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicDeployments.
     * @param {publicDeploymentsUpsertArgs} args - Arguments to update or create a PublicDeployments.
     * @example
     * // Update or create a PublicDeployments
     * const publicDeployments = await prisma.publicDeployments.upsert({
     *   create: {
     *     // ... data to create a PublicDeployments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicDeployments we want to update
     *   }
     * })
     */
    upsert<T extends publicDeploymentsUpsertArgs>(args: SelectSubset<T, publicDeploymentsUpsertArgs<ExtArgs>>): Prisma__publicDeploymentsClient<$Result.GetResult<Prisma.$publicDeploymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicDeployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicDeploymentsCountArgs} args - Arguments to filter PublicDeployments to count.
     * @example
     * // Count the number of PublicDeployments
     * const count = await prisma.publicDeployments.count({
     *   where: {
     *     // ... the filter for the PublicDeployments we want to count
     *   }
     * })
    **/
    count<T extends publicDeploymentsCountArgs>(
      args?: Subset<T, publicDeploymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicDeploymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicDeployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDeploymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicDeploymentsAggregateArgs>(args: Subset<T, PublicDeploymentsAggregateArgs>): Prisma.PrismaPromise<GetPublicDeploymentsAggregateType<T>>

    /**
     * Group by PublicDeployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicDeploymentsGroupByArgs} args - Group by arguments.
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
      T extends publicDeploymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publicDeploymentsGroupByArgs['orderBy'] }
        : { orderBy?: publicDeploymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, publicDeploymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicDeploymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the publicDeployments model
   */
  readonly fields: publicDeploymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publicDeployments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publicDeploymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the publicDeployments model
   */
  interface publicDeploymentsFieldRefs {
    readonly id: FieldRef<"publicDeployments", 'String'>
    readonly subdomain: FieldRef<"publicDeployments", 'String'>
    readonly gitURL: FieldRef<"publicDeployments", 'String'>
    readonly live: FieldRef<"publicDeployments", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * publicDeployments findUnique
   */
  export type publicDeploymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * Filter, which publicDeployments to fetch.
     */
    where: publicDeploymentsWhereUniqueInput
  }

  /**
   * publicDeployments findUniqueOrThrow
   */
  export type publicDeploymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * Filter, which publicDeployments to fetch.
     */
    where: publicDeploymentsWhereUniqueInput
  }

  /**
   * publicDeployments findFirst
   */
  export type publicDeploymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * Filter, which publicDeployments to fetch.
     */
    where?: publicDeploymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicDeployments to fetch.
     */
    orderBy?: publicDeploymentsOrderByWithRelationInput | publicDeploymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publicDeployments.
     */
    cursor?: publicDeploymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicDeployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicDeployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publicDeployments.
     */
    distinct?: PublicDeploymentsScalarFieldEnum | PublicDeploymentsScalarFieldEnum[]
  }

  /**
   * publicDeployments findFirstOrThrow
   */
  export type publicDeploymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * Filter, which publicDeployments to fetch.
     */
    where?: publicDeploymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicDeployments to fetch.
     */
    orderBy?: publicDeploymentsOrderByWithRelationInput | publicDeploymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publicDeployments.
     */
    cursor?: publicDeploymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicDeployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicDeployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publicDeployments.
     */
    distinct?: PublicDeploymentsScalarFieldEnum | PublicDeploymentsScalarFieldEnum[]
  }

  /**
   * publicDeployments findMany
   */
  export type publicDeploymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * Filter, which publicDeployments to fetch.
     */
    where?: publicDeploymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicDeployments to fetch.
     */
    orderBy?: publicDeploymentsOrderByWithRelationInput | publicDeploymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing publicDeployments.
     */
    cursor?: publicDeploymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicDeployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicDeployments.
     */
    skip?: number
    distinct?: PublicDeploymentsScalarFieldEnum | PublicDeploymentsScalarFieldEnum[]
  }

  /**
   * publicDeployments create
   */
  export type publicDeploymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * The data needed to create a publicDeployments.
     */
    data: XOR<publicDeploymentsCreateInput, publicDeploymentsUncheckedCreateInput>
  }

  /**
   * publicDeployments createMany
   */
  export type publicDeploymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publicDeployments.
     */
    data: publicDeploymentsCreateManyInput | publicDeploymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publicDeployments createManyAndReturn
   */
  export type publicDeploymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * The data used to create many publicDeployments.
     */
    data: publicDeploymentsCreateManyInput | publicDeploymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publicDeployments update
   */
  export type publicDeploymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * The data needed to update a publicDeployments.
     */
    data: XOR<publicDeploymentsUpdateInput, publicDeploymentsUncheckedUpdateInput>
    /**
     * Choose, which publicDeployments to update.
     */
    where: publicDeploymentsWhereUniqueInput
  }

  /**
   * publicDeployments updateMany
   */
  export type publicDeploymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publicDeployments.
     */
    data: XOR<publicDeploymentsUpdateManyMutationInput, publicDeploymentsUncheckedUpdateManyInput>
    /**
     * Filter which publicDeployments to update
     */
    where?: publicDeploymentsWhereInput
    /**
     * Limit how many publicDeployments to update.
     */
    limit?: number
  }

  /**
   * publicDeployments updateManyAndReturn
   */
  export type publicDeploymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * The data used to update publicDeployments.
     */
    data: XOR<publicDeploymentsUpdateManyMutationInput, publicDeploymentsUncheckedUpdateManyInput>
    /**
     * Filter which publicDeployments to update
     */
    where?: publicDeploymentsWhereInput
    /**
     * Limit how many publicDeployments to update.
     */
    limit?: number
  }

  /**
   * publicDeployments upsert
   */
  export type publicDeploymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * The filter to search for the publicDeployments to update in case it exists.
     */
    where: publicDeploymentsWhereUniqueInput
    /**
     * In case the publicDeployments found by the `where` argument doesn't exist, create a new publicDeployments with this data.
     */
    create: XOR<publicDeploymentsCreateInput, publicDeploymentsUncheckedCreateInput>
    /**
     * In case the publicDeployments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publicDeploymentsUpdateInput, publicDeploymentsUncheckedUpdateInput>
  }

  /**
   * publicDeployments delete
   */
  export type publicDeploymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
    /**
     * Filter which publicDeployments to delete.
     */
    where: publicDeploymentsWhereUniqueInput
  }

  /**
   * publicDeployments deleteMany
   */
  export type publicDeploymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publicDeployments to delete
     */
    where?: publicDeploymentsWhereInput
    /**
     * Limit how many publicDeployments to delete.
     */
    limit?: number
  }

  /**
   * publicDeployments without action
   */
  export type publicDeploymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicDeployments
     */
    select?: publicDeploymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicDeployments
     */
    omit?: publicDeploymentsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    avatar: 'avatar',
    type: 'type',
    installationId: 'installationId',
    subId: 'subId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    gitUrl: 'gitUrl',
    env: 'env',
    repoBranch: 'repoBranch',
    subDomain: 'subDomain',
    customDomain: 'customDomain',
    outputFolder: 'outputFolder',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    latest: 'latest',
    live: 'live'
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const PublicDeploymentsScalarFieldEnum: {
    id: 'id',
    subdomain: 'subdomain',
    gitURL: 'gitURL',
    live: 'live'
  };

  export type PublicDeploymentsScalarFieldEnum = (typeof PublicDeploymentsScalarFieldEnum)[keyof typeof PublicDeploymentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DeploymentStatus'
   */
  export type EnumDeploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentStatus'>
    


  /**
   * Reference to a field of type 'DeploymentStatus[]'
   */
  export type ListEnumDeploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    userName?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    type?: StringNullableFilter<"user"> | string | null
    installationId?: StringNullableFilter<"user"> | string | null
    subId?: StringFilter<"user"> | string
    project?: ProjectListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    installationId?: SortOrderInput | SortOrder
    subId?: SortOrder
    project?: projectOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userName?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    type?: StringNullableFilter<"user"> | string | null
    installationId?: StringNullableFilter<"user"> | string | null
    subId?: StringFilter<"user"> | string
    project?: ProjectListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    installationId?: SortOrderInput | SortOrder
    subId?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    userName?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    type?: StringNullableWithAggregatesFilter<"user"> | string | null
    installationId?: StringNullableWithAggregatesFilter<"user"> | string | null
    subId?: StringWithAggregatesFilter<"user"> | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: StringFilter<"project"> | string
    userId?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    gitUrl?: StringFilter<"project"> | string
    env?: StringNullableFilter<"project"> | string | null
    repoBranch?: StringFilter<"project"> | string
    subDomain?: StringFilter<"project"> | string
    customDomain?: StringNullableFilter<"project"> | string | null
    outputFolder?: StringFilter<"project"> | string
    status?: EnumDeploymentStatusFilter<"project"> | $Enums.DeploymentStatus
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    deployments?: DeploymentListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gitUrl?: SortOrder
    env?: SortOrderInput | SortOrder
    repoBranch?: SortOrder
    subDomain?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    outputFolder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    deployments?: deploymentOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subDomain?: string
    customDomain?: string
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    userId?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    gitUrl?: StringFilter<"project"> | string
    env?: StringNullableFilter<"project"> | string | null
    repoBranch?: StringFilter<"project"> | string
    outputFolder?: StringFilter<"project"> | string
    status?: EnumDeploymentStatusFilter<"project"> | $Enums.DeploymentStatus
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    deployments?: DeploymentListRelationFilter
  }, "id" | "subDomain" | "customDomain">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gitUrl?: SortOrder
    env?: SortOrderInput | SortOrder
    repoBranch?: SortOrder
    subDomain?: SortOrder
    customDomain?: SortOrderInput | SortOrder
    outputFolder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"project"> | string
    userId?: StringWithAggregatesFilter<"project"> | string
    name?: StringWithAggregatesFilter<"project"> | string
    gitUrl?: StringWithAggregatesFilter<"project"> | string
    env?: StringNullableWithAggregatesFilter<"project"> | string | null
    repoBranch?: StringWithAggregatesFilter<"project"> | string
    subDomain?: StringWithAggregatesFilter<"project"> | string
    customDomain?: StringNullableWithAggregatesFilter<"project"> | string | null
    outputFolder?: StringWithAggregatesFilter<"project"> | string
    status?: EnumDeploymentStatusWithAggregatesFilter<"project"> | $Enums.DeploymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type deploymentWhereInput = {
    AND?: deploymentWhereInput | deploymentWhereInput[]
    OR?: deploymentWhereInput[]
    NOT?: deploymentWhereInput | deploymentWhereInput[]
    id?: StringFilter<"deployment"> | string
    projectId?: StringFilter<"deployment"> | string
    createdAt?: DateTimeFilter<"deployment"> | Date | string
    updatedAt?: DateTimeFilter<"deployment"> | Date | string
    latest?: BoolFilter<"deployment"> | boolean
    live?: BoolFilter<"deployment"> | boolean
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type deploymentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latest?: SortOrder
    live?: SortOrder
    project?: projectOrderByWithRelationInput
  }

  export type deploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: deploymentWhereInput | deploymentWhereInput[]
    OR?: deploymentWhereInput[]
    NOT?: deploymentWhereInput | deploymentWhereInput[]
    projectId?: StringFilter<"deployment"> | string
    createdAt?: DateTimeFilter<"deployment"> | Date | string
    updatedAt?: DateTimeFilter<"deployment"> | Date | string
    latest?: BoolFilter<"deployment"> | boolean
    live?: BoolFilter<"deployment"> | boolean
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type deploymentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latest?: SortOrder
    live?: SortOrder
    _count?: deploymentCountOrderByAggregateInput
    _max?: deploymentMaxOrderByAggregateInput
    _min?: deploymentMinOrderByAggregateInput
  }

  export type deploymentScalarWhereWithAggregatesInput = {
    AND?: deploymentScalarWhereWithAggregatesInput | deploymentScalarWhereWithAggregatesInput[]
    OR?: deploymentScalarWhereWithAggregatesInput[]
    NOT?: deploymentScalarWhereWithAggregatesInput | deploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"deployment"> | string
    projectId?: StringWithAggregatesFilter<"deployment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"deployment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"deployment"> | Date | string
    latest?: BoolWithAggregatesFilter<"deployment"> | boolean
    live?: BoolWithAggregatesFilter<"deployment"> | boolean
  }

  export type publicDeploymentsWhereInput = {
    AND?: publicDeploymentsWhereInput | publicDeploymentsWhereInput[]
    OR?: publicDeploymentsWhereInput[]
    NOT?: publicDeploymentsWhereInput | publicDeploymentsWhereInput[]
    id?: StringFilter<"publicDeployments"> | string
    subdomain?: StringFilter<"publicDeployments"> | string
    gitURL?: StringFilter<"publicDeployments"> | string
    live?: BoolFilter<"publicDeployments"> | boolean
  }

  export type publicDeploymentsOrderByWithRelationInput = {
    id?: SortOrder
    subdomain?: SortOrder
    gitURL?: SortOrder
    live?: SortOrder
  }

  export type publicDeploymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: publicDeploymentsWhereInput | publicDeploymentsWhereInput[]
    OR?: publicDeploymentsWhereInput[]
    NOT?: publicDeploymentsWhereInput | publicDeploymentsWhereInput[]
    subdomain?: StringFilter<"publicDeployments"> | string
    gitURL?: StringFilter<"publicDeployments"> | string
    live?: BoolFilter<"publicDeployments"> | boolean
  }, "id">

  export type publicDeploymentsOrderByWithAggregationInput = {
    id?: SortOrder
    subdomain?: SortOrder
    gitURL?: SortOrder
    live?: SortOrder
    _count?: publicDeploymentsCountOrderByAggregateInput
    _max?: publicDeploymentsMaxOrderByAggregateInput
    _min?: publicDeploymentsMinOrderByAggregateInput
  }

  export type publicDeploymentsScalarWhereWithAggregatesInput = {
    AND?: publicDeploymentsScalarWhereWithAggregatesInput | publicDeploymentsScalarWhereWithAggregatesInput[]
    OR?: publicDeploymentsScalarWhereWithAggregatesInput[]
    NOT?: publicDeploymentsScalarWhereWithAggregatesInput | publicDeploymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"publicDeployments"> | string
    subdomain?: StringWithAggregatesFilter<"publicDeployments"> | string
    gitURL?: StringWithAggregatesFilter<"publicDeployments"> | string
    live?: BoolWithAggregatesFilter<"publicDeployments"> | boolean
  }

  export type userCreateInput = {
    id?: string
    userName: string
    email: string
    avatar?: string | null
    type?: string | null
    installationId?: string | null
    subId: string
    project?: projectCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    avatar?: string | null
    type?: string | null
    installationId?: string | null
    subId: string
    project?: projectUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    subId?: StringFieldUpdateOperationsInput | string
    project?: projectUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    subId?: StringFieldUpdateOperationsInput | string
    project?: projectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    userName: string
    email: string
    avatar?: string | null
    type?: string | null
    installationId?: string | null
    subId: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    subId?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    subId?: StringFieldUpdateOperationsInput | string
  }

  export type projectCreateInput = {
    id?: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProjectInput
    deployments?: deploymentCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: deploymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectNestedInput
    deployments?: deploymentUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: deploymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: string
    userId: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type deploymentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latest?: boolean
    live?: boolean
    project: projectCreateNestedOneWithoutDeploymentsInput
  }

  export type deploymentUncheckedCreateInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latest?: boolean
    live?: boolean
  }

  export type deploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
    project?: projectUpdateOneRequiredWithoutDeploymentsNestedInput
  }

  export type deploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type deploymentCreateManyInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latest?: boolean
    live?: boolean
  }

  export type deploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type deploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type publicDeploymentsCreateInput = {
    id?: string
    subdomain: string
    gitURL: string
    live?: boolean
  }

  export type publicDeploymentsUncheckedCreateInput = {
    id?: string
    subdomain: string
    gitURL: string
    live?: boolean
  }

  export type publicDeploymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    gitURL?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type publicDeploymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    gitURL?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type publicDeploymentsCreateManyInput = {
    id?: string
    subdomain: string
    gitURL: string
    live?: boolean
  }

  export type publicDeploymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    gitURL?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type publicDeploymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    gitURL?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    type?: SortOrder
    installationId?: SortOrder
    subId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    type?: SortOrder
    installationId?: SortOrder
    subId?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    type?: SortOrder
    installationId?: SortOrder
    subId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDeploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusFilter<$PrismaModel> | $Enums.DeploymentStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type DeploymentListRelationFilter = {
    every?: deploymentWhereInput
    some?: deploymentWhereInput
    none?: deploymentWhereInput
  }

  export type deploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gitUrl?: SortOrder
    env?: SortOrder
    repoBranch?: SortOrder
    subDomain?: SortOrder
    customDomain?: SortOrder
    outputFolder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gitUrl?: SortOrder
    env?: SortOrder
    repoBranch?: SortOrder
    subDomain?: SortOrder
    customDomain?: SortOrder
    outputFolder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    gitUrl?: SortOrder
    env?: SortOrder
    repoBranch?: SortOrder
    subDomain?: SortOrder
    customDomain?: SortOrder
    outputFolder?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumDeploymentStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type deploymentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latest?: SortOrder
    live?: SortOrder
  }

  export type deploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latest?: SortOrder
    live?: SortOrder
  }

  export type deploymentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latest?: SortOrder
    live?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type publicDeploymentsCountOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    gitURL?: SortOrder
    live?: SortOrder
  }

  export type publicDeploymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    gitURL?: SortOrder
    live?: SortOrder
  }

  export type publicDeploymentsMinOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    gitURL?: SortOrder
    live?: SortOrder
  }

  export type projectCreateNestedManyWithoutUserInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type projectUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectInput
    connect?: userWhereUniqueInput
  }

  export type deploymentCreateNestedManyWithoutProjectInput = {
    create?: XOR<deploymentCreateWithoutProjectInput, deploymentUncheckedCreateWithoutProjectInput> | deploymentCreateWithoutProjectInput[] | deploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: deploymentCreateOrConnectWithoutProjectInput | deploymentCreateOrConnectWithoutProjectInput[]
    createMany?: deploymentCreateManyProjectInputEnvelope
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
  }

  export type deploymentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<deploymentCreateWithoutProjectInput, deploymentUncheckedCreateWithoutProjectInput> | deploymentCreateWithoutProjectInput[] | deploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: deploymentCreateOrConnectWithoutProjectInput | deploymentCreateOrConnectWithoutProjectInput[]
    createMany?: deploymentCreateManyProjectInputEnvelope
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
  }

  export type EnumDeploymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeploymentStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectInput
    upsert?: userUpsertWithoutProjectInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProjectInput, userUpdateWithoutProjectInput>, userUncheckedUpdateWithoutProjectInput>
  }

  export type deploymentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<deploymentCreateWithoutProjectInput, deploymentUncheckedCreateWithoutProjectInput> | deploymentCreateWithoutProjectInput[] | deploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: deploymentCreateOrConnectWithoutProjectInput | deploymentCreateOrConnectWithoutProjectInput[]
    upsert?: deploymentUpsertWithWhereUniqueWithoutProjectInput | deploymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: deploymentCreateManyProjectInputEnvelope
    set?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    disconnect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    delete?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    update?: deploymentUpdateWithWhereUniqueWithoutProjectInput | deploymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: deploymentUpdateManyWithWhereWithoutProjectInput | deploymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: deploymentScalarWhereInput | deploymentScalarWhereInput[]
  }

  export type deploymentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<deploymentCreateWithoutProjectInput, deploymentUncheckedCreateWithoutProjectInput> | deploymentCreateWithoutProjectInput[] | deploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: deploymentCreateOrConnectWithoutProjectInput | deploymentCreateOrConnectWithoutProjectInput[]
    upsert?: deploymentUpsertWithWhereUniqueWithoutProjectInput | deploymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: deploymentCreateManyProjectInputEnvelope
    set?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    disconnect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    delete?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[]
    update?: deploymentUpdateWithWhereUniqueWithoutProjectInput | deploymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: deploymentUpdateManyWithWhereWithoutProjectInput | deploymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: deploymentScalarWhereInput | deploymentScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<projectCreateWithoutDeploymentsInput, projectUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: projectCreateOrConnectWithoutDeploymentsInput
    connect?: projectWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type projectUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<projectCreateWithoutDeploymentsInput, projectUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: projectCreateOrConnectWithoutDeploymentsInput
    upsert?: projectUpsertWithoutDeploymentsInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutDeploymentsInput, projectUpdateWithoutDeploymentsInput>, projectUncheckedUpdateWithoutDeploymentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDeploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusFilter<$PrismaModel> | $Enums.DeploymentStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumDeploymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type projectCreateWithoutUserInput = {
    id?: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: deploymentCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: deploymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
  }

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
  }

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>
  }

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutUserInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: StringFilter<"project"> | string
    userId?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    gitUrl?: StringFilter<"project"> | string
    env?: StringNullableFilter<"project"> | string | null
    repoBranch?: StringFilter<"project"> | string
    subDomain?: StringFilter<"project"> | string
    customDomain?: StringNullableFilter<"project"> | string | null
    outputFolder?: StringFilter<"project"> | string
    status?: EnumDeploymentStatusFilter<"project"> | $Enums.DeploymentStatus
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
  }

  export type userCreateWithoutProjectInput = {
    id?: string
    userName: string
    email: string
    avatar?: string | null
    type?: string | null
    installationId?: string | null
    subId: string
  }

  export type userUncheckedCreateWithoutProjectInput = {
    id?: string
    userName: string
    email: string
    avatar?: string | null
    type?: string | null
    installationId?: string | null
    subId: string
  }

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
  }

  export type deploymentCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latest?: boolean
    live?: boolean
  }

  export type deploymentUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latest?: boolean
    live?: boolean
  }

  export type deploymentCreateOrConnectWithoutProjectInput = {
    where: deploymentWhereUniqueInput
    create: XOR<deploymentCreateWithoutProjectInput, deploymentUncheckedCreateWithoutProjectInput>
  }

  export type deploymentCreateManyProjectInputEnvelope = {
    data: deploymentCreateManyProjectInput | deploymentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutProjectInput = {
    update: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>
  }

  export type userUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    subId?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    subId?: StringFieldUpdateOperationsInput | string
  }

  export type deploymentUpsertWithWhereUniqueWithoutProjectInput = {
    where: deploymentWhereUniqueInput
    update: XOR<deploymentUpdateWithoutProjectInput, deploymentUncheckedUpdateWithoutProjectInput>
    create: XOR<deploymentCreateWithoutProjectInput, deploymentUncheckedCreateWithoutProjectInput>
  }

  export type deploymentUpdateWithWhereUniqueWithoutProjectInput = {
    where: deploymentWhereUniqueInput
    data: XOR<deploymentUpdateWithoutProjectInput, deploymentUncheckedUpdateWithoutProjectInput>
  }

  export type deploymentUpdateManyWithWhereWithoutProjectInput = {
    where: deploymentScalarWhereInput
    data: XOR<deploymentUpdateManyMutationInput, deploymentUncheckedUpdateManyWithoutProjectInput>
  }

  export type deploymentScalarWhereInput = {
    AND?: deploymentScalarWhereInput | deploymentScalarWhereInput[]
    OR?: deploymentScalarWhereInput[]
    NOT?: deploymentScalarWhereInput | deploymentScalarWhereInput[]
    id?: StringFilter<"deployment"> | string
    projectId?: StringFilter<"deployment"> | string
    createdAt?: DateTimeFilter<"deployment"> | Date | string
    updatedAt?: DateTimeFilter<"deployment"> | Date | string
    latest?: BoolFilter<"deployment"> | boolean
    live?: BoolFilter<"deployment"> | boolean
  }

  export type projectCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    userId: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectCreateOrConnectWithoutDeploymentsInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutDeploymentsInput, projectUncheckedCreateWithoutDeploymentsInput>
  }

  export type projectUpsertWithoutDeploymentsInput = {
    update: XOR<projectUpdateWithoutDeploymentsInput, projectUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<projectCreateWithoutDeploymentsInput, projectUncheckedCreateWithoutDeploymentsInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutDeploymentsInput, projectUncheckedUpdateWithoutDeploymentsInput>
  }

  export type projectUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateManyUserInput = {
    id?: string
    name: string
    gitUrl: string
    env?: string | null
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    outputFolder: string
    status: $Enums.DeploymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: deploymentUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: deploymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gitUrl?: StringFieldUpdateOperationsInput | string
    env?: NullableStringFieldUpdateOperationsInput | string | null
    repoBranch?: StringFieldUpdateOperationsInput | string
    subDomain?: StringFieldUpdateOperationsInput | string
    customDomain?: NullableStringFieldUpdateOperationsInput | string | null
    outputFolder?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type deploymentCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latest?: boolean
    live?: boolean
  }

  export type deploymentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type deploymentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
  }

  export type deploymentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latest?: BoolFieldUpdateOperationsInput | boolean
    live?: BoolFieldUpdateOperationsInput | boolean
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