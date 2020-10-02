/**
 * Peb.js JavaScript library
 * @version 3.0.0
 */
declare module 'peb' {

    /* interface declare */
    interface ajaxConfigOptions {
        /** Request type - `GET` or `POST`*/
        type: string,
        /** Request URL */
        url: string,
        /** Function to do when success */
        success?: function,
        /** Function to do when fail */
        fail?: function
    }

    /* type declare */
    type consoleOperatorCharacter = "log" | "info" | "warn" | "error" | "clear" | 0 | 1 | 2 | 3 | 4

    /* namespace peb */

    /**
     * A namespace of basic peb.js method peb
     */
    namespace peb {

        const parseJson = JSON.parse
        const stringifyJson = JSON.stringify
        const now = Date.now()

        /**
         * Peb basicly error type.
         * All other peb error are extending this.
         */
        class PebError extends Error {
            constructor(message: string)
        }
        /**
         * If required a valid object but value is none, then throw this.
         */
        class PebNullObjectError extends PebError {
            constructor(message: string)
        }

        /**
         * Select a HTMLElement and operate it.
         * 
         * No need `index` parameter if `selector` is id selector,
         * but we recommended pass in `null`
         */
        function sel(selector: string, index?: number): RElement

        /**
         * Select multiple HTMLElements and operate it.
         */
        function sel(selector: string): RElementsCollection

        /**
         * Send HTTPXML Request
         */
        function ajax(type: string, url: string, success: function, fail: function): undefined

        /**
         * Send HTTPXML Request
         */
        function ajax(args: ajaxConfigOptions): undefined

        /**
         * Send console log
         * 
         * msg types
         * 
         * | Name       | ID  |
         * | :--------: | :-: |
         * | `"log"`    | `0` |
         * | `"info"`   | `1` |
         * | `"error"`  | `2` |
         * | `"warn"`   | `3` |
         * | `"clear"`  | `4` |
         */
        function console(msgType: consoleOperatorCharacter, ...data: string[]): undefined
        
        /**
         * Get a upper case of a string.
         */
        function upperCase(str: string): string
        
        /**
         * Get a lower case of a string.
         */
        function lowerCase(str: string): string
        
        /**
         * Remove spaces or dashes and convert to camel case.
         * 
         * Example:
         * ```
         * peb.camelCase("a good variable"); // aGoodVariable
         * peb.camelCase("a-bad-variable"); // aBadVariable
         * ```
         */
        function camelCase(str: string): string

        /**
         * Get constructor name of the object
         */
        function getclass(obj: any): string

        /**
         * Get a number or string is numberic
         */
        function isdigit(obj: string|number): boolean

        /**
         * await sleep time or sleep a time then do a function
         * 
         * Example:
         * ```
         * peb.sleep(1000).then(() => { alert("foo") })
         * 
         * await peb.sleep(1000)
         * ```
         */
        function sleep(ms: number): Promise<undefined>

        /**
         * ForEach in any object type
         */
        function forEach(obj: any, callbackFn: (current: any, index: number, array: any[]) => void): undefined

        /**
         * Generate a node
         */
        namespace genNode {
            /**
             * Generate a new element with innerHTML and attributes
             */
            function element(nodeName: string, inner?: string, attr?: object): HTMLElement

            /**
             * Generate a text node.
             */
            function text(text: string): Text

            /**
             * Parse the string of HTML content into Node
             */
            function fromStr(str: string): HTMLElement|Node|Text
        }

        /**
         * Cteate an operatable elements collection
         */
        class RElementsCollection {
            /**
             * construct by exist node list
             */
            constructor(elements: NodeList)

            forEach(callbackFn: (element: RElement, index: number, collection: RElementsCollection) => void, startIndex: number): undefined
        }

        /**
         * Create an operatable element or be a `sel` function result
         */
        class RElement {
            constructor(element: HTMLElement|Node)

            /**
             * Edit attribute `attributeName` to `becoming`
             */
            attr(attributeName: string, becoming: string): undefined

            /**
             * Get all attributes or attribute `attributeName`
             */
            attr(attributeName?: string): string|NamedNodeMap

            /**
             * Edit multiple attributes
             * 
             * Example:
             * ```
             * peb.sel("div", 0).attr({
             *     foo: "val",
             *     bar: "val"
             * })
             * ```
             */
            attr(attributesCollection: object): undefined

            /**
             * Add, Remove, Get or Set class of the element
             */
            class(): DOMSettableTokenList

            /**
             * Set dataset `name` to `becoming`.
             */
            data(name: string, becoming: string): string

            /**
             * Set dataset by object `key` to `value`.
             * 
             * Example:
             * ```
             * peb.sel("div", 0).data({
             *     foo: "val",
             *     bar: "val"
             * })
             * ```
             */
            data(sequence: object): undefined

            /**
             * Insert new element to current element
             */
            insert(...nodes: Node[]|HTMLElement[]|RElement[]): undefined

            /**
             * Delete element
             */
            del(): undefined

            /**
             * Get inner (html)
             */
            html(): string

            /**
             * Set inner (html) value.
             * Allow HTML in string
             */
            html(becoming: string): string

            /**
             * Get inner plain text
             */
            text(): string

            /**
             * Get value (`<input>` element, etc.)
             */
            val(): string

            /**
             * Set value (`<input>` element, etc.)
             */
            val(becoming: string): string

            /**
             * Hide element.
             * Actually is set style.display to none
             */
            hide(): undefined

            /**
             * Show element (if already hide)
             */
            show(): string

            /**
             * Set element display type
             */
            show(type: string): string

            /**
             * Add event listener
             */
            on(event: string, listener: function): undefined

            /**
             * Add multiple event listener
             * 
             * Example:
             * ```
             * peb.sel("div#foo").on({
             *     click: () => {
             *         alert("bar")
             *     },
             *     mouseover: () => {
             *         console.log("bar")
             *     }
             * })
             * ```
             */
            on(eventListenerSequence: Object): undefined

            /**
             * Return parent node
             */
            parent(): RElement

            /**
             * Return first child node
             */
            child(): RElement

            /**
             * Get next elementSibling
             */
            next(): RElement

            /**
             * Get previous elementSibling
             */
            prev(): RElement
        }
    }
}