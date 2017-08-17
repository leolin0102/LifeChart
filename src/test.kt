import kotlin.browser.window
import kotlin.js.Math

/**
 * Created by leo on 2017/8/15.
 */
fun main(args: Array<String>) {
    var margin: dynamic = mapOf(
            Pair("top", 100),
            Pair("right", 100),
            Pair("bottom", 100),
            Pair("left", 100)
    )

    var width: dynamic = Math.min(700, window.innerWidth - 10) -  margin.left - margin.right

    var height: dynamic = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20)
    var color = d3.scale.ordinal().range(listOf("#EDC951","#CC333F","#00A0B0"))
    val data: dynamic = arrayOf(1,2,3,4)
    d3.selectAll("p")
            .data(data)
            .style("font-size") { it ->
        it + "px"
    }
}